// registration.ts
import { type Registration } from '@prisma/client';

import { db } from '@/server/db';

type RegistrationInput = {
	campId: number;
	childId: number;
	parentId: number;
	accepted: boolean;
	paid: boolean;
};

const createRegistration = async (
	data: RegistrationInput
): Promise<Registration> =>
	db.registration.create({
		data
	});

const getRegistrationById = async (
	registrationId: number
): Promise<Registration | null> =>
	db.registration.findUnique({
		where: {
			id: registrationId
		}
	});

const updateRegistration = async (
	registrationId: number,
	data: Partial<RegistrationInput>
): Promise<Registration | null> =>
	db.registration.update({
		where: {
			id: registrationId
		},
		data
	});

const deleteRegistration = async (
	registrationId: number
): Promise<Registration | null> =>
	db.registration.delete({
		where: {
			id: registrationId
		}
	});

export {
	createRegistration,
	getRegistrationById,
	updateRegistration,
	deleteRegistration
};
