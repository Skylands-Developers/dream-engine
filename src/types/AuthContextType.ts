export interface AuthContextType {
	user?: any;
	signin: (username: string, callback: () => void) => void;
	signout: (callback: () => void) => void;
}
