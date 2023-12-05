'use server';

import { readPosts } from '@/server/feed';
import FeedPost from '@/app/_components/FeedPost';

const Feed = async () => {
	const posts = await readPosts();
	console.log(posts);
	return posts.map(post => (
		<FeedPost
			key={post.id}
			title={post.title}
			createdAt={post.createdAt}
			content={post.content}
			imagePath={post.imagePath}
		/>
	));
};

export default Feed;
