import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/auth/authActions';
import { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, usersRef } from '../../config/firebase';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Location } from '../../typing';

const usePresenter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState<Location | undefined>(undefined);
  const [facebookLink, setFacebookLink] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSignup = async () => {
    if (email && password) {
      try {
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
          birthDate,
          uid: userCredentials.user.uid,
        };

        await setDoc(doc(usersRef), user);
        dispatch(setUser(user));
      } catch (err) {
        console.log('handle register error', err);
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
    setAddress({
      formatted_address: details?.formatted_address,
      location: details?.geometry?.location,
    });
  };

  const onChangeFacebookLink = (text: string) => {
    setFacebookLink(text);
  };

  const onChangeBirthDate = (text: string) => {
    setBirthDate(text);
  };

  // const handleGoogleAuth = async () => {
  //   console.log('#########', signInWithPopup);
  //   const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
  //
  // getRedirectResult(auth)
  //   .then((result) => {
  //     console.log('#########');
  //     // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential?.accessToken;
  //
  //     // The signed-in user info.
  //     const user = result?.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
  // };

  return {
    handleSignup,
    onChangeEmail,
    onChangePassword,
    // handleGoogleAuth,
    onChangeFirstName,
    onChangeLastName,
    onChangeProfileImage,
    onChangePhoneNumber,
    onChangeAddress,
    onChangeFacebookLink,
    onChangeBirthDate,
  };
};
export default usePresenter;
