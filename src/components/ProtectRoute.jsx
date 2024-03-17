import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../context/UserProvider';
export default function ProtectRoute() {
	const { havUser } = useContext(userContext);
	return havUser ? <Outlet /> : <Navigate to='/' />;
}
