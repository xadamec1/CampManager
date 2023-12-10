import { Suspense } from 'react';

import LoadingComponent from '@/app/_components/Loading';
import RegistrationList from '@/app/_components/AdminRegistrationList';

const Page = () => (
	<div>
		<Suspense fallback={<LoadingComponent />}>
			<RegistrationList />
		</Suspense>
	</div>
);

export default Page;
