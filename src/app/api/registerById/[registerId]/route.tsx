import { db } from '@/server/db';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export async function DELETE(
	_request: Request,
	{ params }: { params: { registerId: string } }
) {
	const result = await db.registration.delete({
		where: { id: +params.registerId }
	});
	return Response.json(result);
}
