const DashboardCard = ({ item }) => {
	const { image, description, whiteText } = item;

	const descriptionTextColor = whiteText ? 'text-white' : 'text-dark';

	return (
		<div
			className='dashboard-card'
			style={{ backgroundImage: `url(${image})` }}
		>
			<p className={`dashboard-card-description ${descriptionTextColor}`}>
				{description}
			</p>
		</div>
	);
};

export default DashboardCard;
