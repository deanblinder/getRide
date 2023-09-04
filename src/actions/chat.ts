import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { chatRef, db } from '../config/firebase';
import { Query } from '@firebase/firestore';

export const getConversation = async (conversationId: string) => {
  const querySnapshot = query(
    collection(db, 'chat'),
    where('id', '==', conversationId)
  );

  if (!(await isConversationExists(querySnapshot))) {
    await setDoc(doc(chatRef), { id: conversationId, content: [] });
  }
  const conversation = await getDocs(querySnapshot);
  return conversation.docs[0].data().content;
};

const isConversationExists = async (querySnapshot: Query) => {
  const conversation = await getDocs(querySnapshot);
  return conversation.docs.length !== 0;
};
