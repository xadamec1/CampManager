// Import necessary libraries
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { db } from '@/server/db';

type CardProps = {
	name: string;
	description: string;
	imagePath: string;
	price: number;
	availablePlaces: number;
	beginDate: string;
	endDate: string;
	campId: number;
};

const CampCard: React.FC<CardProps> = ({
	name,
	description,
	imagePath,
	price,
	beginDate,
	endDate,
	availablePlaces,
	campId
}) => ( //
	<div className="carousel-item bg-default-card card mr-10 shadow-xl">
		<figure><Image
			className="w-full"
			width={200}
			height={200}
			src={imagePath}
			alt={name}
		/></figure>
		<div className="card-body">
			<div className="card-title text-xl font-bold">{name}</div>
			<p className="text-base">{truncateText(description)}</p>
			<div className="mt-4">
				<p className="">
					<strong>Price:</strong> ${price}
				</p>
				<p className="">
					<strong>Date:</strong> {beginDate} - {endDate}
				</p>
				<p className="">
					<strong>Available Places:</strong> {availablePlaces}
				</p>
			</div>
			<div className="card-actions justify-end">
				<Link
					href={`/camp/${campId}`}
					className="rounded bg-darker-green font-bold text-white hover:bg-default-text  px-4 py-2"
				>
					Go to camp
				</Link>
			</div>
		</div>
	</div>
);
const truncateText = (text: string, limit = 100) => {
	if (text.length > limit) {
		return `${text.substring(0, limit)}...`;
	}
	return text;
};

const CampCards = async () => {
	const publicCamps = await db.camp.findMany({
		where: { isPublic: true }
	});
	return (
		<div className="carousel rounded-box pt-2 pb-10">
			{publicCamps.map(camp => (
				<CampCard
					key={camp.id}
					name={camp.name}
					description={camp.description}
					imagePath={camp.imagePath}
					price={camp.price}
					beginDate={camp.startDate.toLocaleDateString()}
					endDate={camp.endDate.toLocaleDateString()}
					availablePlaces={camp.capacity}
					campId={camp.id}
				/>
			))}
		</div>
	);
};

export default CampCards;
