import React, { Suspense } from 'react';
import Link from 'next/link';

import InstructorList from '@/app/_components/InstructorList'; // Assuming you have an InstructorList component
import LoadingComponent from '@/app/_components/Loading';

const Page = () => (
	<div>
		<Link className="darker-green btn" href="./instructors/create">
			Add new instructor
		</Link>
		<Suspense fallback={<LoadingComponent />}>
			<InstructorList />
		</Suspense>
	</div>
);

export default Page;
