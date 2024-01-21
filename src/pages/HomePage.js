import Sidebar from '../components/Sidebar';
import DashboardCardsList from '../features/display/DashboardCardsList';
import { DASHBOARD } from '../app/data/DASHBOARD';

console.log(DASHBOARD);

const Home = () => {
	return (
		<div className='homepage-container'>
			<Sidebar />
			<div className='dashboard'>
				<DashboardCardsList />
			</div>
		</div>
	);
};

export default Home;
