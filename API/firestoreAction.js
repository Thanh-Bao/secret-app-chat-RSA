import * as constants from '../const'
import { doc, getDoc, collection, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { async } from '@firebase/util';

export const checkUsernameExists = async username => {
    if (username === "") {
        return false;
    }
    const docRef = doc(db, constants.USERS_COLLECTION, username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return true;
    } else {
        return false;
    }
}

export const addUser = async account => {
    const { username, password, publicKey, recentConversation } = account;
    try {
        const userRef = collection(db, constants.USERS_COLLECTION);
        await setDoc(doc(userRef, username), { password, publicKey, recentConversation });
        return true;
    } catch (err) {
        return false;
    }
}

export const getListConversation = async usernameReceiver => {
    const collection = collection(db, constants.CONSERVATION_COLLECTION);
    const q = query(collection, where("usernameReceiver", "==", usernameReceiver), where("usernameSender", "==", constants.USERID));
    const querySnapshot = await getDocs(q);
    return querySnapshot.map(doc => doc.data());
}


export const getHistoryconversation = async () => {
    const userID = null;
    if (typeof window !== "undefined") {
        userID = localStorage.getItem(constants.USERID);
    }
    const docRef = doc(db, constants.USERS_COLLECTION, userID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists())
        return docSnap.data().recentConversation;
}

export const getPublicKeyUser = async keyword => {
    const snap = await getDoc(doc(db, constants.USERS_COLLECTION, keyword))
    if (snap.exists()) {
        return snap.data().publicKey;
    }
    else {
        return null;
    }
}