import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faNewspaper,
	faSun,
	faMapPin,
	faClock,
	faCloud
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
	return (
		<nav className='sidebar bg-white'>
			<ul>
				<li>
					<NavLink
						to='/module1'
						className='nav-link-sidebar text-dark'
					>
						<FontAwesomeIcon className='fa-fw' icon={faNewspaper} />
						News
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/module2'
						className='nav-link-sidebar text-dark '
					>
						<FontAwesomeIcon className='fa-fw' icon={faSun} />
						Weather
					</NavLink>
				</li>
				<li>
					<NavLink to='/' className='nav-link-sidebar text-dark '>
						<FontAwesomeIcon className='fa-fw' icon={faMapPin} />
						Pinned
					</NavLink>
				</li>
				<li>
					<NavLink to='/' className='nav-link-sidebar text-dark '>
						<FontAwesomeIcon className='fa-fw' icon={faClock} />
						Recent
					</NavLink>
				</li>
				<li>
					<NavLink to='/' className='nav-link-sidebar text-dark '>
						<FontAwesomeIcon className='fa-fw' icon={faCloud} />
						Uploads
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
