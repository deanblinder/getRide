import { useSelector } from 'react-redux';
import { AuthState } from '../../redux/auth/authReducer';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { usersActions } from '../../actions';

const usePresenter = () => {
  const user = useSelector((state: AuthState) => state.user);
  const [profileImage, setProfileImage] = useState<string | undefined>(
    user?.profileImage
  );
  const [profileImageLoading, setProfileImageLoading] =
    useState<boolean>(false);

  const uploadImage = async (uri: string) => {
    try {
      setProfileImageLoading(true);
      const response = await fetch(uri);
      const blob = await response.blob();

      const fileName = uri.substring(uri.lastIndexOf('/') + 1);
      const storageRef = ref(storage, 'images/' + fileName);
      const uploadTask = uploadBytesResumable(storageRef, blob);
      uploadTask.then(() => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          usersActions.updateUser(user?.uid!, {
            profileImage: downloadURL,
          });
          console.log('### download', downloadURL);
          setProfileImage(downloadURL);
        });
      });
    } catch (err) {
      console.log('### upload image error', err);
    } finally {
      setProfileImageLoading(false);
    }
  };

  // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //   console.log('### download', downloadURL);
  //   setProfileImage(downloadURL);
  // });

  const onAvatarPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      await uploadImage(result.assets[0].uri);
    }
  };

  return { user, onAvatarPress, profileImage, profileImageLoading };
};

export default usePresenter;
