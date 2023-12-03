import { Suspense } from 'react';

import Feed from '@/app/_components/Feed';

const Page = () => (
	<Suspense fallback={<span className="loading loading-spinner loading-lg" />}>
		<Feed />
	</Suspense>
);

export default Page;
