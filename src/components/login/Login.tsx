import { SyntheticEvent, useState } from 'react';
import { API } from '../../api/api';
import { useAuth } from '../../hooks/useAuth';
import { FetchState } from '../../types/FetchState';
import '../auth/auth.scss';
import { SignUp } from './SignUp';

export function Login(): JSX.Element {
	const auth = useAuth();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [register, setRegister] = useState<boolean>(false);

	const handleLogin = async (e: SyntheticEvent) => {
		e.preventDefault();
		auth.dispatch({ type: FetchState.INIT });
		try {
			API.createSession(email, password).then((_session) => {
				API.getAccount().then((data) => {
					auth.dispatch({ type: FetchState.SUCCESS, payload: data });
				});
			});
		} catch (e) {
			auth.dispatch({ type: FetchState.FAILURE });
		}
	};

	if (register) {
		return <SignUp setRegister={setRegister} dispatch={auth.dispatch} />;
	}

	return (
		<div className='login'>
			<form onSubmit={handleLogin}>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					name='email'
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					name='password'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button disabled={!email || !password} type='submit'>
					Log In
				</button>
			</form>
			<p>
				{' '}
				Don't have an account ?{' '}
				<span
					style={{ textDecoration: 'underline', cursor: 'pointer' }}
					onClick={(e) => {
						e.preventDefault();
						setRegister(true);
					}}>
					Sign Up
				</span>
			</p>
		</div>
	);
}
