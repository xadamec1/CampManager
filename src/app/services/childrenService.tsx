import { type Children } from '@prisma/client';

import { db } from '@/server/db';

type ChildrenInput = {
	adressId: number;
	firstName: string;
	lastName: string;
	allergies: string;
	diet: string;
	birthDate: string;
	insuranceCompany: number;
};

const createChild = async (data: ChildrenInput): Promise<Children> =>
	db.children.create({
		data
	});

const getChildById = async (childId: number): Promise<Children | null> =>
	db.children.findUnique({
		where: {
			id: childId
		}
	});

const getChildByOptions = async (options: {
	firstName: string;
	lastName: string;
	birthDate: string;
}): Promise<Children | null> =>
	db.children.findUnique({
		where: {
			firstName_lastName_birthDate: options
		}
	});

const updateChild = async (
	childId: number,
	data: Partial<ChildrenInput>
): Promise<Children | null> =>
	db.children.update({
		where: {
			id: childId
		},
		data
	});

const deleteChild = async (childId: number): Promise<Children | null> =>
	db.children.delete({
		where: {
			id: childId
		}
	});

export {
	createChild,
	getChildById,
	getChildByOptions,
	updateChild,
	deleteChild
};
