import React, { Suspense } from 'react';

import CampCards from './_components/CampCards';
import Logo from './_components/Logo';
import Feed from './_components/Feed';

const Home = () => (
	<div className="container mx-auto mt-8">
		<h1 className="mb-4 text-center text-3xl font-bold">Camp with us</h1>
		<span className="flex justify-center">
			<Logo />
		</span>

		<div className="flex flex-wrap justify-between">
			<CampCards />
		</div>

		<h1 className="mt-16 text-xl font-bold">Newsfeed</h1>
		<Suspense
			fallback={<span className="loading loading-spinner loading-lg" />}
		>
			<div className="mt-5">
				<Feed />
			</div>
		</Suspense>
	</div>
);
export default Home;
