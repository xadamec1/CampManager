import Link from 'next/link';

import CampDetails from '@/app/_components/CampDetails';
import { db } from '@/server/db';
import InstructorDetail from '@/app/_components/InstructorDetail';

type InstructorProps = {
	params: {
		id: number;
	};
};

const InstructorInfo = async ({ params }: InstructorProps) => {
	const instructor = await db.instructor.findUnique({
		where: { id: +params.id }
	});
	return instructor === null ? (
		<div>Unexpeted error, try again later</div>
	) : (
		<div className="r-10">
			<Link
				href={`./${instructor.id}/edit`}
				className="font-bold hover:underline"
			>
				Edit
			</Link>
			<InstructorDetail
				id={instructor.id}
				name={instructor.name}
				email={instructor.email}
				phoneNumber={instructor.phoneNumber}
			/>
		</div>
	);
};

export default InstructorInfo;
