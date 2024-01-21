import { NavLink } from 'react-router-dom';
import CitySearch from '../features/search/CitySearch';

const Navbar = ({ onCitySelect }) => {
	return (
		<nav className='header bg-white'>
			<NavLink to='/' className='logo fs-600 text-dark'>
				myCity
			</NavLink>
			<CitySearch onCitySelect={onCitySelect} />
			<ul className='navbar fs-400 '>
				<li>
					<NavLink to='/' className='nav-link text-dark'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/module1' className='nav-link text-dark '>
						Module 1
					</NavLink>
				</li>
				<li>
					<NavLink to='/module2' className='nav-link text-dark '>
						Module 2
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' className='nav-link text-dark '>
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink to='/login' className='nav-link text-dark '>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
