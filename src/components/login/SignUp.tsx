import { Models } from 'appwrite';
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/api';
import { Action } from '../../types/Action';
import { FetchState } from '../../types/FetchState';

export type SignUpProps = {
	setRegister: Dispatch<SetStateAction<boolean>>;
	dispatch: Dispatch<Action<Models.User<Models.Preferences>>>;
};
export function SignUp(props: SignUpProps): JSX.Element {
	const { setRegister, dispatch } = props;
	const navigate = useNavigate();

	const [name, setName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSignup = async (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch({ type: FetchState.INIT });
		try {
			API.createAccount(username, email, password, name).then((user) => {
				API.createSession(email, password).then((_session) => {
					dispatch({ type: FetchState.SUCCESS, payload: user });
					navigate('/');
				});
			});
		} catch (e) {
			dispatch({ type: FetchState.FAILURE });
		}
	};

	return (
		<div className='login'>
			<form onSubmit={handleSignup}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						name='name'
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						name='username'
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div>
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
				</div>
				<div>
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
				</div>
				<button disabled={!name || !email || !password} type='submit'>
					Sign Up
				</button>
			</form>
			<p>
				{' '}
				Already have an account ?{' '}
				<span
					style={{ textDecoration: 'underline', cursor: 'pointer' }}
					onClick={(e) => {
						e.preventDefault();
						setRegister(false);
					}}>
					Login
				</span>
			</p>
		</div>
	);
}
