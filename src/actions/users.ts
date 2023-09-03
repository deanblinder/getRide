import { getDocs, query, where } from 'firebase/firestore';
import { usersRef } from '../config/firebase';
import { User } from '../typing';

export const getUserById = async (userId: string) => {
  const q = query(usersRef, where('uid', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data() as User;
};
