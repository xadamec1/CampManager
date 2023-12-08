import { db } from '@/server/db';

import { type Instructor } from '../types/camp';

const createInstructor = async (data: Instructor): Promise<Instructor> =>
	db.instructor.create({
		data
	});

const getInstructors = async () => db.instructor.findMany();

const getInstructorById = async (
	instructorId: number
): Promise<Instructor | null> =>
	db.instructor.findUnique({
		where: {
			id: instructorId
		}
	});

const updateInstructor = async (
	instructorId: number,
	data: Partial<Instructor>
): Promise<Instructor | null> =>
	db.instructor.update({
		where: {
			id: instructorId
		},
		data
	});

const deleteInstructor = async (
	instructorId: number
): Promise<Instructor | null> =>
	db.instructor.delete({
		where: {
			id: instructorId
		}
	});

export {
	getInstructors,
	createInstructor,
	getInstructorById,
	updateInstructor,
	deleteInstructor
};
