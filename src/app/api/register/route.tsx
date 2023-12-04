import { createRegistration } from '@/app/services/RegistrationService';
import { createAddress } from '@/app/services/adressService';
import { createChild, getChildByOptions } from '@/app/services/childrenService';
import { createParent, getParentByEmail } from '@/app/services/parentService';
import { type CampRegistration } from '@/app/types/camp';

export const POST = async (req: Request) => {
	const data = (await req.json()) as CampRegistration;
	data.dateOfBirth = new Date(data.dateOfBirth);

	console.log(data);
	const child = await childInfo(data);
	const parent = await parentInfo(data);

	if (
		child === undefined ||
		child === null ||
		parent === undefined ||
		parent === null
	) {
		return Response.error();
	}

	const res = await createRegistration({
		campId: data.campId,
		childId: child.id,
		parentId: parent.id,
		accepted: false,
		paid: false
	});
	return Response.json(res);
};

const parentInfo = async (data: CampRegistration) => {
	const parent = await getParentByEmail(data.email);
	if (parent === undefined || parent === null) {
		const newParent = createParent({
			firstName: data.parentName,
			lastName: data.parentSurname,
			phoneNumber: data.phoneNumber,
			email: data.email
		});

		return newParent;
	}
	return parent;
};

const childInfo = async (data: CampRegistration) => {
	const child = await getChildByOptions({
		firstName: data.name,
		lastName: data.surname,
		birthDate: data.dateOfBirth.toISOString()
	});

	if (child === undefined || child === null) {
		const newAdress = await createAddress({
			streetNumber: data.street,
			city: data.city,
			zipCode: data.postalCode,
			notes: ''
		});

		const newChild = createChild({
			adressId: newAdress.id,
			firstName: data.name,
			lastName: data.surname,
			birthDate: data.dateOfBirth.toISOString(),
			allergies: '',
			diet: '',
			insuranceCompany: 0
		});

		return newChild;
	}

	return child;
};
