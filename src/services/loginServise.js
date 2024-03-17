export default function loginServise(res, remember) {
	let expirationDate = null; // Caducidad al cerrar la pestaña del navegador (sesión)

	if (remember) {
		// Caducidad en 365 días (1 año)
		let oneYear = 365 * 24 * 60 * 60 * 1000; // 1 año en milisegundos
		expirationDate = new Date(Date.now() + oneYear);
	}

	if (remember) {
		// Guardar en cookie segura con caducidad en 1 año
		document.cookie = `user=${res}; secure; SameSite=Strict; expires=${expirationDate.toUTCString()}`;
	} else {
		// Guardar en cookie de sesión
		document.cookie = `user=${res}; secure; SameSite=Strict`;
	}
}
