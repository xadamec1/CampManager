// pages/about-us.js

import React from 'react';
import { getInstructors } from '../services/instructorService';
import InstructorInfo from '../_components/InstructorInfo';

const AboutUs = async () => {
	const instructors = await getInstructors();
	return (
		<div>
			<section className="container mx-auto p-8">
				<h1 className="mb-6 text-3xl font-semibold">O nás</h1>

				<p className="mb-4">Vítejte v Kepa - Příměstské Tábory.</p>

				<h2 className="mb-4 text-2xl font-semibold">Organizátoři tábora</h2>
				{instructors.map(x => (
					<InstructorInfo
						name={x.name}
						email={x.email}
						phoneNumber={x.phoneNumber}
					/>
				))}
			</section>
		</div>
	);
};

export default AboutUs;
