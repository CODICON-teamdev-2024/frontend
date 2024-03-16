import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
	const { data, setData } = useState(null);
	const { loading, setLoading } = useState(true);
	const { error, setError } = useState(false);

	useEffect(() => {
		setLoading(true);
		const requestOptions = {
			method: options.method || 'GET', // Default to GET if no method is provided
			headers: options.headers || {}, // Default to empty headers if none are provided
			body: options.body || null, // Default to null for GET requests
		};

		fetch(url, requestOptions)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, [url, options]);

	return { data, loading, error };
}
