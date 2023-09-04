import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { auth, storage, usersRef } from '../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Location } from '../../typing';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const usePresenter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState<Location | undefined>(undefined);
  const [facebookLink, setFacebookLink] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const handleSignup = async () => {
    if (email && password && phoneNumber) {
      try {
        setLoading(true);
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = {
          email,
          password,
          firstName,
          lastName,
          profileImage,
          phoneNumber,
          address,
          facebookLink,
          birthDate: birthDate.toDateString(),
          uid: userCredentials.user.uid,
        };
        await setDoc(doc(usersRef), user);
        setLoading(false);
        dispatch(setUser(user));
      } catch (err) {
        console.log('handle register error', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onChangeFirstName = (text: string) => {
    setFirstName(text);
  };

  const onChangeLastName = (text: string) => {
    setLastName(text);
  };

  const onChangeProfileImage = (text: string) => {
    setProfileImage(text);
  };

  const onChangePhoneNumber = (text: string) => {
    setPhoneNumber(text);
  };

  const onChangeAddress = (details: GooglePlaceDetail | null) => {
    console.log('### details', details);
    setAddress({
      formatted_address: details?.formatted_address,
      location: details?.geometry?.location,
    });
  };

  const onChangeFacebookLink = (text: string) => {
    setFacebookLink(text);
  };

  const onChangeBirthDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    setBirthDate(date!);
  };

  const uploadImage = async (uri: string) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const fileName = uri.substring(uri.lastIndexOf('/') + 1);

      const storageRef = ref(storage, 'images/' + fileName);
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.then(() => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('### download', downloadURL);
          setProfileImage(downloadURL);
        });
      });
    } catch (err) {
      console.log('### upload image error', err);
    }
  };

  // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //   console.log('### download', downloadURL);
  //   setProfileImage(downloadURL);
  // });

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      await uploadImage(result.assets[0].uri);
    }
  };

  return {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
    onChangeProfileImage,
    onChangePhoneNumber,
    onChangeAddress,
    onChangeFacebookLink,
    onChangeBirthDate,
    pickImageAsync,
    profileImage,
    birthDate,
    loading,
  };
};
export default usePresenter;
