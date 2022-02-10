import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/api';
import { useAuth } from '../../hooks/useAuth';
import { FetchState } from '../../types/FetchState';
import './home.scss';

export function Home(): JSX.Element {
	const auth = useAuth();
	const navigate = useNavigate();
	const [describingADream, isDescribingADream] = useState<boolean>(false);
	const [dreamDescription, setDreamDescription] = useState<string>('');

	const handleLogout = async (): Promise<void> => {
		auth.dispatch({ type: FetchState.INIT });
		try {
			await API.deleteCurrentSession();
			auth.dispatch({ type: FetchState.SUCCESS, payload: undefined });
		} catch (e) {
			auth.dispatch({ type: FetchState.FAILURE });
		}
	};

	return (
		<div className='home'>
			{describingADream ? (
				<>
					<input
						placeholder='Describe your dream...'
						value={dreamDescription}
						onChange={(p): void => {
							setDreamDescription(p.currentTarget.value);
						}}
					/>
					<button disabled={!dreamDescription}>Dream</button>
					<button
						onClick={(): void => {
							isDescribingADream(false);
						}}>
						{'<-'}
					</button>
				</>
			) : (
				<>
					<button
						onClick={(): void => {
							isDescribingADream(true);
						}}>
						Describe a Dream
					</button>
				</>
			)}
			<button
				className='secondary'
				onClick={(): void => {
					navigate('/dream');
				}}>
				Just Dream Anything
			</button>
			<button className='danger' onClick={handleLogout}>
				Log Out
			</button>
		</div>
	);
}
