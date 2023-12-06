import { db } from '@/server/db';
import { FeedPost } from '../types/camp'; // Make sure to import the correct type for FeedPost

const createFeedPost = async (data: Omit<FeedPost, 'id'>): Promise<FeedPost> =>
	db.feedPost.create({
		data
	});

const getFeedPosts = async () => db.feedPost.findMany();

const getFeedPostById = async (postId: number): Promise<FeedPost | null> =>
	db.feedPost.findUnique({
		where: {
			id: postId
		}
	});

const updateFeedPost = async (
	postId: number,
	data: Partial<FeedPost>
): Promise<FeedPost | null> =>
	db.feedPost.update({
		where: {
			id: postId
		},
		data
	});

const deleteFeedPost = async (postId: number): Promise<FeedPost | null> =>
	db.feedPost.delete({
		where: {
			id: postId
		}
	});

export {
	getFeedPosts,
	createFeedPost,
	getFeedPostById,
	updateFeedPost,
	deleteFeedPost
};
