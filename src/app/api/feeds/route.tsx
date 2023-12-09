import {
	createFeedPost,
	deleteFeedPost,
	getFeedPosts,
	updateFeedPost
} from '@/app/services/feedService';
import { type FeedPost } from '@/app/types/feeds';

export const POST = async (req: Request) => {
	const data = (await req.json()) as FeedPost;

	try {
		const newFeedPost = await createFeedPost(data);
		return Response.json(newFeedPost);
	} catch (error) {
		return Response.error();
	}
};

export const PUT = async (req: Request) => {
	const data = (await req.json()) as Partial<FeedPost>;
	const feedPostId = data.id;

	console.log(data);
	console.log(feedPostId);

	if (feedPostId) {
		const updatedFeedPost = await updateFeedPost(feedPostId, data);
		console.log(updateFeedPost);
		if (updatedFeedPost) {
			return Response.json(updatedFeedPost);
		} else {
			return Response.error();
		}
	} else {
		return Response.error();
	}
};

export const DELETE = async (req: Request) => {
	const data = req.body as Partial<FeedPost>;
	if (data.id) {
		const deletedFeedPost = await deleteFeedPost(data.id);

		if (deletedFeedPost) {
			return Response.json(deletedFeedPost);
		} else {
			return Response.error();
		}
	} else {
		return Response.error();
	}
};

export const GET = async () => getFeedPosts();
