import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import SingUpForm from './SingUpForm';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
export default function SingUpEl() {
	const [res, setRes] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isDone, setDone] = useState(false);
	const [abortController, setAbortController] = useState(null);
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
			name: data.get('firstName'),
			lastName: data.get('lastName'),
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
				setDone(true);
			});
	};
	return (
		<>
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
							>
								Volver
							</Button>
						</Box>
					}
				/>
			)}
			{isDone && !error && <Navigate to='/' />}
			<SingUpForm handleSubmit={handleSubmit} />
		</>
	);
}
