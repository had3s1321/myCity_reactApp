import attractions from '../assets/attractions.jpg';
import city from '../assets/city.jpg';
import events from '../assets/events.jpg';
import jobs from '../assets/jobs.jpg';

export const DASHBOARD = [
	{
		id: 0,
		name: 'city',
		image: city,
		description: '',
		whiteText: false
	},
	{
		id: 1,
		name: 'events',
		image: events,
		description: 'Events Near You',
		whiteText: true
	},
	{
		id: 2,
		name: 'jobs',
		image: jobs,
		description: 'Jobs Near You',
		whiteText: false
	},
	{
		id: 3,
		name: 'attractions',
		image: attractions,
		description: 'Attractions',
		whiteText: true
	}
];
