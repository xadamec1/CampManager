import React from 'react';

import CampCards from './_components/CampCards';
import Logo from './_components/Logo';

const Home = () => (
	<div className="container mx-auto mt-8">
		<h1 className="mb-4 text-center text-3xl font-bold">Camp with us</h1>
		<span className="flex justify-center">
			<Logo />
		</span>

		<div className="flex flex-wrap justify-between">
			<CampCards />
		</div>
	</div>
);
export default Home;
