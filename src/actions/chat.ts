import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  or,
  query,
  setDoc,
  updateDoc,
  addDoc,
  where,
} from 'firebase/firestore';

import { app, chatRef, db, usersRef } from '../config/firebase';
import { Conversation } from '../typing';
import * as chance from 'chance';
import firebase from 'firebase/compat';
import { initializeApp } from 'firebase/app';
// import firestore = firebase.firestore;

export const sendMessage = async ({
  userId,
  senderId,
  conversationId,
  message,
}: {
  userId: string;
  message: string;
  senderId: string;
  conversationId: string;
}) => {
  initializeApp();

  const ref = doc(db, 'chat', userId, '123', '123');
  // const collectionRef = collection(db, `chat/${userId}/123/123`);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    const doc = docSnap.data() as Conversation;
    const updatedConversation: Conversation = {
      id: doc.id,
      senderAId: doc.senderAId,
      senderBId: doc.senderBId,
      messages: [
        ...doc.messages,
        {
          id: chance.Chance().guid(),
          senderId: userId,
          content: message,
          timeStamp: new Date().getTime(),
        },
      ],
    };
    await updateDoc(ref, updatedConversation);
  } else {
    const newConversation: Conversation = {
      id: conversationId,
      senderAId: userId,
      senderBId: senderId,
      messages: [
        {
          id: chance.Chance().guid(),
          senderId: userId,
          content: message,
          timeStamp: new Date().getTime(),
        },
      ],
    };
    // const docRef = doc(db, `chat/${userId}`);
    const chatRef1 = firebase.firestore().collection('chat1');
    const chatRef = collection(db, 'chat');
    await addDoc(chatRef, chatRef1);

    // await chatRef
    //   .doc('2hTc7yXcN4SoyyTbQbdLNgj0gwW2')
    //   .collection('11111')
    //   .doc('22222')
    //   .set({
    //     id: 'conversationId',
    //   });
    // const subcollectionRef = docRef.collection('new_subcollection');
    // const subcollectionRef = docRef.collection('new_subcollection');
    // await subcollectionRef.add({
    //   foo: 'bar',
    // });
    // console.log('### subcollectionRef', subcollectionRef);
    // await subcollectionRef.add({ foo: 'bar' });
  }
};
