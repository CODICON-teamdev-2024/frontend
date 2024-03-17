import { createContext, useEffect, useState } from 'react';
import getUser from '../module/getUser';
export const userContext = createContext();
export function UserPovider({ children }) {
	const [havUser, setHaveUser] = useState(false);
	useEffect(() => {
		const user = getUser();
		if (user) setHaveUser(true);
	}, []);
	return (
		<userContext.Provider value={{ havUser, setHaveUser }}>
			{children}
		</userContext.Provider>
	);
}
