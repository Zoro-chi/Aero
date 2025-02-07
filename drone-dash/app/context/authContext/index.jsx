import { auth } from "@/app/firebase/config";
import { useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	const initializeUser = (user) => {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
		}
		setLoading(false);
	};

	const value = {
		currentUser,
		userLoggedIn,
		loading,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
