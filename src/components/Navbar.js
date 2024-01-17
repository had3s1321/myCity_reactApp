import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
	return (
		<nav className='header flex bg-accent'>
			<NavLink to='/' className='logo fs-600 text-dark'>
				myCity
			</NavLink>
			<ul className='navbar flex fs-400 '>
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
