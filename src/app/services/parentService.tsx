import { type Parent } from '@prisma/client';

import { db } from '@/server/db';

type ParentInput = {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
};

const createParent = async (data: ParentInput): Promise<Parent> =>
	db.parent.create({
		data
	});

const getParentById = async (parentId: number): Promise<Parent | null> =>
	db.parent.findUnique({
		where: {
			id: parentId
		}
	});

const getParentByEmail = async (email: string): Promise<Parent | null> =>
	db.parent.findUnique({
		where: {
			email
		}
	});

const updateParent = async (
	parentId: number,
	data: Partial<ParentInput>
): Promise<Parent | null> =>
	db.parent.update({
		where: {
			id: parentId
		},
		data
	});

const deleteParent = async (parentId: number): Promise<Parent | null> =>
	db.parent.delete({
		where: {
			id: parentId
		}
	});

export {
	createParent,
	getParentById,
	getParentByEmail,
	updateParent,
	deleteParent
};
