import React from 'react';

import CampCard from './_components/CampCard'; // Adjust the path based on your project structure

const Home = () => {
	// Sample data for available camps
	const availableCamps = [
		{
			name: 'Camp 1',
			description: 'Description for Camp 1',
			imagePath: '/camping_fun_h.webp'
		},
		{
			name: 'Camp 2',
			description: 'Description for Camp 1',
			imagePath: '/camping_fun_h.webp'
		}
		// Add more camp data as needed
	];

	return (
		<div>
			<h1>Camp with us</h1>
			<h2>Our available camps</h2>

			<div className="flex flex-wrap">
				{availableCamps.map((camp, index) => (
					<CampCard
						key={index}
						name={camp.name}
						description={camp.description}
						imagePath={camp.imagePath}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
