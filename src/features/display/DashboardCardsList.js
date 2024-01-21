import { DASHBOARD } from '../../app/data/DASHBOARD';
import DashboardCard from './DashboardCard';

const DashboardCardsList = () => {
	return (
		<>
			{DASHBOARD.map((item) => {
				return <DashboardCard item={item} />;
			})}
		</>
	);
};

export default DashboardCardsList;
