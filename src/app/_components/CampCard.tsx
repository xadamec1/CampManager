// Import necessary libraries
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type CardProps = {
	name: string;
	description: string;
	imagePath: string;
};

const CampCard: React.FC<CardProps> = ({ name, description, imagePath }) => (
	<div className="max-w-sm overflow-hidden rounded p-8 shadow-lg">
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
				href={`/details/${name}`}
				className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			>
				Details
			</Link>
		</div>
	</div>
);

export default CampCard;
