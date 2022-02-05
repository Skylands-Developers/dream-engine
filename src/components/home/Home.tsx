import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
export function Home(): JSX.Element {
	const auth = useAuth();
	const navigate = useNavigate();
	const [describingADream, isDescribingADream] = useState<boolean>(false);
	const [dreamDescription, setDreamDescription] = useState<string>('');
	return (
		<div className='home'>
			{describingADream ? (
				<>
					<input
						placeholder='Describe your dream...'
						value={dreamDescription}
						onChange={(p) => {
							setDreamDescription(p.currentTarget.value);
						}}
					/>
					<button disabled={!dreamDescription}>Dream</button>
					<button
						onClick={() => {
							isDescribingADream(false);
						}}>
						{'<-'}
					</button>
				</>
			) : (
				<>
					<button
						onClick={() => {
							navigate('/dream');
						}}>
						Just Dream Anything
					</button>
					<button
						onClick={() => {
							isDescribingADream(true);
						}}>
						Describe a Dream
					</button>
				</>
			)}
			<button
				onClick={() => {
					auth.signout(() => navigate('/'));
				}}>
				Sign out
			</button>
		</div>
	);
}
