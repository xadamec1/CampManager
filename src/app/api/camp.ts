import { db } from '@/server/db';

export const GET = async (_req: Request) => {
	try {
		// List all Camps
		const camps = await db.camp.findMany();
		Response.json(camps);
	} catch (error) {
		Response.json({ error: 'Internal Server Error' });
	}
};
