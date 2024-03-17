import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/contactFormReact/',
	plugins: [react()],
	resolve: {
		alias: {
			'@mui/system': '@mui/system/esm/2015',
			'@mui/styled-engine': '@mui/styled-engine/esm/2015',
			'@emotion/react': require.resolve('@emotion/react'),
			'@emotion/styled': require.resolve('@emotion/styled'),
			'react/jsx-runtime': require.resolve('react/jsx-runtime'),
		},
	},
});
