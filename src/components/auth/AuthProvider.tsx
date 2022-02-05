import { useGetUser } from '../../hooks/useGetUser';
import { AuthContext } from '../../types/AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [{ user, isLoading, isError }, dispatch] = useGetUser();
	return <AuthContext.Provider value={{ user, isLoading, isError, dispatch }}>{children}</AuthContext.Provider>;
}
