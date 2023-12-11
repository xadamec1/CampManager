import React from 'react';
import { Suspense } from 'react';
import Link from 'next/link';

import FeedList from '@/app/_components/AdminFeedList'; // Replace with the correct path
import LoadingComponent from '@/app/_components/Loading';

const Page = () => (
	<div>
		<Link className="darker-green btn" href="./feeds/create">
			Add new feed
		</Link>
		<Suspense fallback={<LoadingComponent />}>
			<FeedList />
		</Suspense>
	</div>
);

export default Page;
