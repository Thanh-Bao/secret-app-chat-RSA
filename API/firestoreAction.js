import * as constants from '../const'
import { doc, getDoc, collection, setDoc } from 'firebase/firestore';
import { db } from './firebase';

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