// Import necessary libraries
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { db } from '@/server/db';

type CardProps = {
	name: string;
	description: string;
	imagePath: string;
};

const CampCard: React.FC<CardProps> = ({ name, description, imagePath }) => (
	<div className="max-w-sm overflow-hidden rounded bg-default-card p-8 shadow-lg">
		<Image
			className=" w-full"
			width={200}
			height={200}
			src={imagePath}
			alt={name}
		/>
		<div className="px-6 py-4">
			<div className="mb-2 text-xl font-bold">{name}</div>
			<p className="text-base text-gray-700">{description}</p>
		</div>
		<div className="px-6 py-4">
			<Link
				href={`/camp/${name}`}
				className="rounded bg-darker-green px-4 py-2 font-bold text-white hover:bg-default-text"
			>
				Go to camp
			</Link>
		</div>
	</div>
);

const CampCards = async () => {
	const publicCamps = await db.camp.findMany({
		where: { isPublic: true }
	});
	return (
		<>
			{publicCamps.map(camp => (
				<CampCard
					key={camp.id} // Adjust the key based on your camp object structure
					name={camp.name}
					description={camp.description}
					imagePath={camp.imagePath}
				/>
			))}
		</>
	);
};

export default CampCards;
