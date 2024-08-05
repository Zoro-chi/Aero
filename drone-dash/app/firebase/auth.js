import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	sendPasswordResetEmail,
	sendEmailVerification,
} from "firebase/auth";

import { auth } from "./config";

export const signUp = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return userCredential.user;
	} catch (error) {
		return error;
	}
};

export const signIn = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		return userCredential.user;
	} catch (error) {
		return error;
	}
};

export const signInWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const userCredential = await signInWithPopup(auth, provider);
		return userCredential.user;
	} catch (error) {
		return error;
	}
};

export const signOut = async () => {
	try {
		await auth.signOut();
	} catch (error) {
		return error;
	}
};

export const resetPassword = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
	} catch (error) {
		return error;
	}
};

export const emailVerification = async () => {
	try {
		await sendEmailVerification(auth.currentUser, {
			url: `${window.location.origin}/login`,
		});
	} catch (error) {
		return error;
	}
};
