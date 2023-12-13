import Link from 'next/link';

import CampDetails from '@/app/_components/CampDetails';
import { db } from '@/server/db';
import { Suspense } from 'react';
import LoadingComponent from '@/app/_components/Loading';

type CampProps = {
	params: {
		id: number;
	};
};

const CampInfo = async ({ params }: CampProps) => {
	const camp = await db.camp.findUnique({
		where: { id: +params.id },
		include: {
			address: true,
			registration: { include: { parent: true, child: true } }
		}
	});
	return camp === null ? (
		<div>Unexpeted error, try again later</div>
	) : (
		<div className="r-10">
			<Link href={`./${camp.id}/edit`} className="font-bold hover:underline">
				Edit
			</Link>
			<Suspense fallback={<LoadingComponent />}>
				<CampDetails camp={camp} />
			</Suspense>
		</div>
	);
};

export default CampInfo;
