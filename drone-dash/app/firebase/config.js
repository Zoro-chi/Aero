import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
	projectId: process.env.PROJECT_ID,
	storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
	messagingSenderId: process.env.SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
