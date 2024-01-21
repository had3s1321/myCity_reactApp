import { useState } from 'react';

const CitySearch = ({ onCitySelect }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		onCitySelect(searchTerm);
	};

	return (
		<form onSubmit={handleSearchSubmit}>
			<input
				type='text'
				placeholder='Search City'
				className='city-search-bar'
				value={searchTerm}
				onChange={handleSearchChange}
			/>
		</form>
	);
};

export default CitySearch;
