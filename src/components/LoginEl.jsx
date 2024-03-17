import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import LoginForm from './LoginForm';
import loginServise from '../services/loginServise';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../context/UserProvider';
export default function LoginEl() {
	const [res, setRes] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isDone, setDone] = useState(false);
	const [abortController, setAbortController] = useState(null);
	const { haveUser, setHaveUser } = useContext(userContext);
	useEffect(() => {
		const controller = new AbortController();
		setAbortController(controller);
		return () => {
			controller.abort();
		};
	}, []);
	const handleSubmit = event => {
		event.preventDefault();
		const url = '';
		const data = new FormData(event.currentTarget);
		const input = {
			email: data.get('email'),
			password: data.get('password'),
		};
		setLoading(true);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(input),
			signal: abortController.signal,
		};
		fetch(url, requestOptions)
			.then(res => res.json())
			.then(res => setRes(res))
			.catch(error => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
				if (res) {
					loginServise(res, data.get('remember'));
					setHaveUser(true);
				}
				setDone(true);
			});
	};
	return (
		<>
			{haveUser && <Navigate to='/dashboard' />}
			{isLoading && <Loading />}
			{error && (
				<Error
					element={
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Typography variant='body1'>
								Error al iniciar sesión. Por favor, verifica tus datos e
								inténtalo de nuevo.
							</Typography>
							<Button
								component={Link}
								to='/'
								variant='outlined'
								sx={{ marginTop: 4, padding: '2 5' }}
								onClick={() => setError(false)}
							>
								Volver
							</Button>
						</Box>
					}
				/>
			)}
			{isDone && !error && <Navigate to='/dashboard' />}
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
}
