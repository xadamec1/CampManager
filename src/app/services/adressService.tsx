import { type Address } from '@prisma/client';

import { db } from '@/server/db';

type AddressInput = {
	streetNumber: string;
	city: string;
	zipCode: string;
	notes: string;
};

const createAddress = async (data: AddressInput): Promise<Address> =>
	db.address.create({
		data
	});

const getAddressById = async (addressId: number): Promise<Address | null> =>
	db.address.findUnique({
		where: {
			id: addressId
		}
	});

const updateAddress = async (
	addressId: number,
	data: Partial<AddressInput>
): Promise<Address | null> =>
	db.address.update({
		where: {
			id: addressId
		},
		data
	});

const deleteAddress = async (addressId: number): Promise<Address | null> =>
	db.address.delete({
		where: {
			id: addressId
		}
	});

export { createAddress, getAddressById, updateAddress, deleteAddress };
