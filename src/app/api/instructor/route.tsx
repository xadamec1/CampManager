import { db } from '@/server/db';
import { type Instructor } from '@/app/types/camp';
import { deleteInstructor } from '@/app/services/instructorService';
import { type InstructorFormSchemaType } from '@/app/types/instructor';

export const GET = async (_req: Request) => {
	try {
		// List all Instructors
		const instructors = await db.instructor.findMany();
		return Response.json(instructors);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};

export const PUT = async (req: Request) => {
	try {
		const { id, ...updateInstructorRequest } =
			(await req.json()) as InstructorFormSchemaType;
		const updatedInstructor = await db.instructor.update({
			where: { id },
			data: updateInstructorRequest
		});

		return Response.json(updatedInstructor);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};

export const POST = async (req: Request) => {
	try {
		const createInstructorRequest =
			(await req.json()) as InstructorFormSchemaType;
		const newInstructor = await db.instructor.create({
			data: createInstructorRequest
		});

		return Response.json(newInstructor);
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' });
	}
};

export const DELETE = async (req: Request) => {
	const data = (await req.json()) as Partial<Instructor>;
	if (data.id) {
		const deleted = await deleteInstructor(data.id);

		if (deleted) {
			return Response.json(deleted);
		} else {
			return Response.error();
		}
	} else {
		return Response.error();
	}
};
