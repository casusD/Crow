import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ForgotPassword from './components/UI/ForgotPassword/ForgotPassword';
import Login from './components/UI/Login/Login';
import Main from './components/UI/Main/Main';
import SignIn from './components/UI/SignIn/SignIn';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		localStorage.getItem('isAuth') === 'true'
	);

	return (
		<Routes>
			<Route path='/' element={<Navigate to='/login' replace />} />

			<Route
				path='/login'
				element={<Login isAuthenticated={setIsAuthenticated} />}
			/>

			<Route path='/register' element={<SignIn />} />
			<Route path='/forgotPassword' element={<ForgotPassword />} />

			<Route
				path='/home'
				element={
					<PrivateRoute isAuthenticated={isAuthenticated}>
						<Main />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
}

export default App;
