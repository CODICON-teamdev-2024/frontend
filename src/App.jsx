import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SingUpPage';
import Dashboard from './pages/Dashboard';
import ProtectRoute from './components/ProtectRoute';
const theme = createTheme();
function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<LoginPage />} />
						<Route path='/registro' element={<SignUpPage />} />
						<Route element={<ProtectRoute />}>
							<Route path='/dashboard' element={<Dashboard />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
