import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import { RequireAuth } from './components/auth/RequireAuth';
import { Home } from './components/home/Home';
import { Layout } from './components/Layout';
import { Login } from './components/login/Login';

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
									<div>D R E A M</div>
								</RequireAuth>
							}
						/>
					</Route>
					<Route path='login' element={<Login />} />
					{/* <Route path='*' element={<p>Nothing here!</p>}  /> */}
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}
