import { useState } from 'react';
import { fakeAuthProvider } from '../../api/fakeAuthProvider';
import { AuthContext } from '../../types/AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<any>(undefined);

	const signin = (newUser: string, callback: VoidFunction) => {
		//TODO replace with Appwrite/Firebase
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	const signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
}
