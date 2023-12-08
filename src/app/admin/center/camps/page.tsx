import { Suspense } from 'react';
import Link from 'next/link';

import CampList from '@/app/_components/AdminCampList';
import LoadingComponent from '@/app/_components/Loading';

const Page = () => (
	<div>
		<Link className="darker-green btn" href="./camps/create">
			Add new camp
		</Link>
		<Suspense fallback={<LoadingComponent />}>
			<CampList />
		</Suspense>
	</div>
);

export default Page;
