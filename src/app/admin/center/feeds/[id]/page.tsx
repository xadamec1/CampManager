import React from 'react';
import Link from 'next/link';

import { db } from '@/server/db';
import FeedPost from '@/app/_components/FeedPost';

const FeedInfo = async ({ params }: { params: { id: number } }) => {
	// Assuming you have a function to fetch feed by ID
	const feed = await db.feedPost.findUnique({
		where: { id: +params.id }
	});

	return feed ? (
		<div className="r-10">
			<Link href={`./${feed.id}/edit`} className="font-bold hover:underline">
				Edit
			</Link>
			<FeedPost
				title={feed.title}
				createdAt={feed.createdAt}
				content={feed.content}
				imagePath={feed.imagePath}
			/>
		</div>
	) : (
		<div>Unexpected error, try again later</div>
	);
};

export default FeedInfo;
