import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/api';
import { useAuth } from '../../hooks/useAuth';
import { FetchState } from '../../types/FetchState';
import '../auth/auth.scss';
import { SignUp } from './SignUp';

export function Login(): JSX.Element {
	const auth = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [register, setRegister] = useState<boolean>(false);

	const handleLogin = async (e: SyntheticEvent): Promise<void> => {
		e.preventDefault();
		auth.dispatch({ type: FetchState.INIT });
		try {
			API.createSession(email, password).then((): void => {
				API.getAccount().then((data) => {
					auth.dispatch({ type: FetchState.SUCCESS, payload: data });
					navigate('/');
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
				<div>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e): void => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e): void => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<button disabled={!email || !password} type='submit'>
					Log In
				</button>
			</form>
			<p>
				Don{`&apos;`}t have an account ?
				<span
					style={{ textDecoration: 'underline', cursor: 'pointer', marginLeft: '8px' }}
					onClick={(e): void => {
						e.preventDefault();
						setRegister(true);
					}}>
					Sign Up
				</span>
			</p>
		</div>
	);
}
