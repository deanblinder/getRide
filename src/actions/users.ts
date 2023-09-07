import {
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, usersRef } from '../config/firebase';
import { User } from '../typing';

export const getUserById = async (userId: string) => {
  const q = query(usersRef, where('uid', '==', userId));
  const querySnapshot = await getDocs(q);
  return (querySnapshot.docs[0].data() as User) || undefined;
};

export const addUser = async (user: User) => {
  const newUserRef = doc(db, 'users', user.uid);
  await setDoc(newUserRef, user);
};

export const updateUser = async (userId: string, props: Partial<User>) => {
  const userToUpdateRef = doc(db, 'users', userId);
  await updateDoc(userToUpdateRef, {
    ...props,
  });
  return await getUserById(userId);
};
