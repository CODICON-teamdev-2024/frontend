import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
	const { res, setRes } = useState(null);
	const { isLoading, setLoading } = useState(true);
	const { error, setError } = useState(false);
	const { handleCancelRequest, setHandleCancelRequest } = useState(null);
	useEffect(() => {
		const abortController = new AbortController();
		setHandleCancelRequest(() => abortController.abort());
		setLoading(true);
		const requestOptions = {
			method: options.method || 'GET', // Default to GET if no method is provided
			headers: options.headers || {}, // Default to empty headers if none are provided
			body: options.body || null, // Default to null for GET requests
			signal: abortController.signal,
		};
		fetch(url, requestOptions)
			.then(res => res.json())
			.then(res => setRes(res))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
		return () => abortController.abort();
	}, [url, options]);
	return { res, isLoading, error, handleCancelRequest };
}
