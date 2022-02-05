import { useContext } from 'react';
import { AuthContext } from '../types/AuthContext';

export function useAuth() {
	return useContext(AuthContext);
}
