import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import loginServise from '../services/loginServise';
import Loading from './Loading';
import Error from './Error';
export default function LoginEl() {
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
			email: data.get('email'),
			password: data.get('password'),
			remember: data.get('remember'), //value= 'on' || null
		};
		setLoading(true);
		const requestOptions = {
			method: 'GET',
			headers: {},
			body: input,
			signal: abortController.signal,
		};
		fetch(url, requestOptions)
			.then(res => res.json())
			.then(res => setRes(res))
			.catch(() => setError(true))
			.finally(() => {
				setLoading(false);
				loginServise(res);
				setDone(true);
			});
	};
	return (
		<>
			{isLoading && <Loading />}
			{error && <Error />}
			{isDone && <Navigate to='/dashboard' />}
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
}
