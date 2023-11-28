import { db } from '@/server/db';

export const GET = async (_req: Request) => {
	try {
		// List all Camps
		const camps = await db.camp.findMany({ where: { isPublic: true } });
		return Response.json(camps);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};
