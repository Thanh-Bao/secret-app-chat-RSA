import * as constants from '../const'
import { doc, getDoc, collection, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const checkUsernameExists = async username => {
    if (username === "") {
        return false;
    }
    const docRef = doc(db, constants.COLLECTION_NAME, username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return true;
    } else {
        return false;
    }
}

export const addUser = async account => {
    try {
        const userRef = collection(db, constants.COLLECTION_NAME);
        await setDoc(doc(userRef, account.username), account);
        return true;
    } catch (err) {
        return false;
    }
}