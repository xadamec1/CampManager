import { db } from '@/server/db';

export const GET = async (_req: Request) => {
	try {
		// List all Camps
		const camps = await db.camp.findMany();
		return Response.json(camps);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};
