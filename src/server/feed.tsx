import { db } from '@/server/db';

export const readPosts = async () => {
	const posts = await db.feedPost.findMany();
	return posts;
};
