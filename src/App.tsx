import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import { RequireAuth } from './components/auth/RequireAuth';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';

export function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route
							index
							element={
								<RequireAuth>
									<Home />
								</RequireAuth>
							}
						/>
						<Route
							path='dream'
							element={
								<RequireAuth>
									<div></div>
								</RequireAuth>
							}
						/>
					</Route>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />

					<Route path='*' element={<p>Nothing here!</p>} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}
