import { useNavigate } from 'react-router-dom';
import { Home } from './home/Home';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

export function Layout() {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth || !auth.user) {
			navigate('/login');
		}
	}, [auth.user]);
	if (!auth || !auth.user) {
		return <></>;
	}
	return (
		<div className='mainLayout'>
			<Home />
		</div>
	);
}
