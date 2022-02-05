import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function Register(props: any): JSX.Element {
	const navigate = useNavigate();
	const location = useLocation();
	const auth = useAuth();
	const from = (location.state as any)?.from.pathname || '/';

	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [passwordConfirmation, setPasswordConfirmation] = useState<string>();

	return (
		<div className='register'>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => {
					setUsername(e.currentTarget.value);
				}}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => {
					setPassword(e.currentTarget.value);
				}}
			/>
			<input
				type='password'
				placeholder='Confirm password'
				value={passwordConfirmation}
				onChange={(e) => {
					setPasswordConfirmation(e.currentTarget.value);
				}}
			/>
			<button
				onClick={() => {
					if (password !== passwordConfirmation) {
						return;
					}
					if (username && password && passwordConfirmation) {
						auth.signin(username, () => {
							navigate('/', { state: from });
						});
					}
				}}>
				Log In
			</button>
		</div>
	);
}
