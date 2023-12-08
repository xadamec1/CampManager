import { db } from '@/server/db';

//created because problem with get if at camp

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function GET(
	_request: Request,
	{ params }: { params: { campId: string } }
) {
	try {
		// List all Camps
		const camps = await db.camp.findUnique({ where: { id: +params.campId } });
		return Response.json(camps);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
}
