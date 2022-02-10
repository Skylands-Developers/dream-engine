import { useNavigate } from 'react-router-dom';
import { Home } from './home/Home';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

export function Layout(): JSX.Element {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.user) {
			navigate('/login');
		}
	}, [auth.user]);
	if (!auth.user) {
		return <></>;
	}
	return (
		<div className='mainLayout'>
			<Home />
		</div>
	);
}
