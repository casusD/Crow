import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRoute {
	children: JSX.Element;
	isAuthenticated: boolean;
}

function PrivateRoute({ children, isAuthenticated }: IPrivateRoute) {
	return isAuthenticated ? children : <Navigate to={'/login'} replace />;
}

export default PrivateRoute;
