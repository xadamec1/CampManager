'use client';
import React, { useEffect, useState } from 'react';

import CampCard from './_components/CampCard'; // Adjust the path based on your project structure
import { Camp } from '@prisma/client';

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
	const [publicCamps, setPublicCamps] = useState<Camp[]>([]);

	const fetchPublicCamps = async () => {
		try {
			const response = await fetch('/api/camp'); // Adjust the endpoint based on your API
			const data = await response.json();
			setPublicCamps(data);
		} catch (error) {
			console.error('Error fetching public camps:', error);
		}
	};

	useEffect(() => {
		fetchPublicCamps();
	}, []);

	return (
		<div className="container mx-auto mt-8">
			<h1 className="mb-4 text-center text-3xl font-bold">Camp with us</h1>
			<h2 className="mb-4 text-center text-2xl font-semibold">Our camps</h2>

			<div className="flex flex-wrap justify-between">
				{publicCamps.map(camp => (
					<CampCard
						key={camp.id} // Adjust the key based on your camp object structure
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
