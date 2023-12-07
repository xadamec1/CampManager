import React, { Suspense } from 'react';

import { db } from '@/server/db';
import Gallery from '@/app/_components/CampGallery';
import LoadingComponent from '@/app/_components/Loading';

export async function generateMetadata({ params }: CampProps) {
	const camp = await db.camp.findUnique({
		where: { id: +params.campId }
	});
	return { title: camp?.name, description: camp?.description };
}

const AboutBox = ({ title, content }: { title: string; content: string }) => (
	<div className="  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
		<div className="m-2  rounded bg-default-card p-4">
			<h2 className="mb-2 text-xl font-bold">{title}</h2>
			<p>{content}</p>
		</div>
	</div>
);

const DescriptionBox = ({
	title,
	content
}: {
	title: string;
	content: string;
}) => (
	<div className=" w-full">
		<div className="m-2  rounded bg-default-card p-4 text-center">
			<h2 className="mb-2  text-xl font-bold">{title}</h2>
			<p>{content}</p>
		</div>
	</div>
);

type CampProps = {
	params: {
		campId: number;
	};
};

const About = async ({ params }: CampProps) => {
	const camp = await db.camp.findUnique({
		where: { id: +params.campId },
		include: { GalleryPhoto: true }
	});
	const place = await db.address.findUnique({
		where: { id: camp?.addressID }
	});
	const registrations = await db.registration.findMany({
		where: { campId: camp?.id }
	});
	return (
		<div>
			<h1 className="mb-4 text-center text-3xl font-bold">{camp?.name}</h1>
			<div className="flex flex-wrap">
				<DescriptionBox
					title="Description"
					content={camp?.description as string}
				/>
				<AboutBox title="Equipment" content={camp?.neededEquipment as string} />
				<AboutBox title="Contact" content={camp?.organiser as string} />
				<AboutBox title="Price" content={camp?.price.toString() as string} />
				<AboutBox
					title="When"
					content={`From ${camp?.startDate.toLocaleString()} to ${camp?.endDate.toLocaleString()}`}
				/>
				<AboutBox
					title="Where"
					content={`${place?.city} ${place?.streetNumber}
                `}
				/>
				<AboutBox
					title="Camp places available"
					content={(
						(camp?.capacity as number) - registrations.length
					).toString()}
				/>
			</div>
			<Suspense fallback={<LoadingComponent />}>
				<Gallery photoLinks={camp?.GalleryPhoto} />
			</Suspense>
		</div>
	);
};

export default About;
