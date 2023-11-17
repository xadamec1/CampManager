import React from 'react';

import CampCards from './_components/CampCards';

const Home = () => {
	// Sample data for available camps
	const availableCamps = [
		{
			name: 'Camp1',
			description: 'Description for Camp 1',
			imagePath: '/camping_fun_h.webp'
		},
		{
			name: 'Camp2',
			description: 'Description for Camp 2',
			imagePath: '/camping_fun_h.webp'
		}
		// Add more camp data as needed
	];

	return (
		<div className="container mx-auto mt-8">
			<h1 className="mb-4 text-center text-3xl font-bold">Camp with us</h1>
			<h2 className="mb-4 text-center text-2xl font-semibold">Our camps</h2>

			<div className="flex flex-wrap justify-between">
				<CampCards />
			</div>
		</div>
	);
};

export default Home;
