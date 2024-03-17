import { Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';
export default function ProtectRoute() {
	const { isAuth, setAuth } = useState(false);
	return isAuth ? <Outlet /> : <Navigate to='/' />;
}
