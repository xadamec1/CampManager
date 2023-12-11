import { db } from '@/server/db';

/* eslint-disable prefer-arrow/prefer-arrow-functions */
export async function GET(
	_request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const feed = await db.feedPost.findUnique({ where: { id: +params.id } });
		return Response.json(feed);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
}
