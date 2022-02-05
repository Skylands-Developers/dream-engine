import { useContext } from 'react';
import { AuthContext } from '../types/AuthContext';
import { AuthContextType } from '../types/AuthContextType';

export function useAuth(): AuthContextType {
	return useContext(AuthContext);
}
