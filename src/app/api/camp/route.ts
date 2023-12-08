import { db } from '@/server/db';
import { type CampWithAddress } from '@/app/types/camp';

export const GET = async (_req: Request) => {
	try {
		// List all Camps
		const camps = await db.camp.findMany({ where: { isPublic: true } });
		return Response.json(camps);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};

export const PUT = async (_req: Request) => {
	try {
		const { id, addressID, address, ...updateCampRequest } =
			(await _req.json()) as CampWithAddress;
		const updatedCamp = await db.camp.update({
			where: { id },
			data: updateCampRequest
		});
		const { id: _, ...updateAddress } = address;
		const updatedAddress = await db.address.update({
			where: { id: addressID },
			data: updateAddress
		});
		const resp = { address: updatedAddress, ...updatedCamp };
		return Response.json(resp);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};
