import { useNavigate } from 'react-router-dom';
import { Home } from './home/Home';
import { useAuth } from '../hooks/useAuth';

export function Layout() {
	const auth = useAuth();
	const navigate = useNavigate();
	return (
		<div className='main layout'>
			{auth && auth.user ? (
				<Home />
			) : (
				<>
					<button onClick={() => navigate('/login')}>Login</button>
					<button onClick={() => navigate('/register')}>Register</button>
				</>
			)}
		</div>
	);
}
