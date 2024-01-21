import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Module1Page from './pages/Module1Page';
import Module2Page from './pages/Module2Page';

function App() {
	const [city, setCity] = useState('');

	const handleCitySelect = (selectedCity) => {
		setCity(selectedCity);
	};
	return (
		<div className='App'>
			<Navbar onCitySelect={handleCitySelect} />
			<div>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='contact' element={<ContactPage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='module1' element={<Module1Page />} />
					<Route path='module2' element={<Module2Page />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
