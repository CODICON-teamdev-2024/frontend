export default function getUser() {
	const cookies = document.cookie.split(';').map(cookie => cookie.trim());
	for (const cookie of cookies) {
		const [key, value] = cookie.split('=');
		if (key === 'user') {
			return value;
		}
	}
	return null;
}
