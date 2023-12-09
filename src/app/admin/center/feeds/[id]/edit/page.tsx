// Ensure you import the necessary types and schemas
import { type FC } from 'react';

import { db } from '@/server/db';
import FeedUpdateForm from '@/app/_components/FeedUpdateForm';

type FeedProps = {
	params: {
		id: number;
	};
};

const EditPage: FC<FeedProps> = async ({ params }) => {
	const feed = await db.feedPost.findUnique({
		where: { id: +params.id }
	});

	return feed === null ? (
		<div>Unexpected error, try again later</div>
	) : (
		<div className="r-10">
			<FeedUpdateForm currentFeed={feed} />
		</div>
	);
};

export default EditPage;
