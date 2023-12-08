// pages/about-us.js

import React from 'react';
import { getInstructors } from '../services/instructorService';
import InstructorInfo from '../_components/InstructorInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Kepa camp/aboutUs',
	description: 'about us page for Kepa camp'
};

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
						key={x}
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
