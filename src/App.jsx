import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProtectRoute from './components/ProtectRoute';
import Dashboard from './pages/Dashboard';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/registro' element={<LoginPage />} />
					<Route element={<ProtectRoute />}>
						<Route path='/dashboard' element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
