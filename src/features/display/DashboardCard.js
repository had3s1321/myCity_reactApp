const DashboardCard = ({ item }) => {
	const { image, description } = item;
	return (
		<div
			className='dashboard-card'
			style={{ backgroundImage: `url(${image})` }}
		>
			<p className='dashboard-card-description text-white'>
				{description}
			</p>
		</div>
	);
};

export default DashboardCard;
