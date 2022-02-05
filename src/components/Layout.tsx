import { useNavigate } from 'react-router-dom';
import { Home } from './home/Home';
import { useAuth } from '../hooks/useAuth';

export function Layout() {
	const auth = useAuth();
	const navigate = useNavigate();
	return (
		<div className='mainLayout'>
			{auth && auth.user ? (
				<Home />
			) : (
				<div className='authChoices'>
					<button onClick={() => navigate('/login')}>Login</button>
					<button onClick={() => navigate('/register')}>Register</button>
				</div>
			)}
		</div>
	);
}
