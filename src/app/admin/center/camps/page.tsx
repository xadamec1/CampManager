import { Suspense } from 'react';

import CampList from '@/app/_components/AdminCampList';
import LoadingComponent from '@/app/_components/Loading';

const Page = () => (
	<Suspense fallback={<LoadingComponent />}>
		<CampList />
	</Suspense>
);

export default Page;
