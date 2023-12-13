import { z } from 'zod';

export const campSchema = z.object({
	id: z.number().int(),
	addressID: z.number().int(),
	name: z.string(),
	organiser: z.string(),
	notes: z.string(),
	neededEquipment: z.string(),
	description: z.string(),
	imagePath: z.string(),
	capacity: z.coerce.number().int(),
	price: z.coerce.number().int(),
	isRegistrationOpen: z.boolean(),
	isPublic: z.boolean(),
	startDate: z.coerce.date(),
	endDate: z.coerce.date()
});

export const addressSchema = z.object({
	id: z.number().int(),
	streetNumber: z.string(),
	city: z.string(),
	zipCode: z.string(),
	notes: z.string()
});

export const campFormSchema = campSchema
	.omit({ id: true, addressID: true })
	.extend({ address: addressSchema.omit({ id: true }) });

export const RegistrationTypeSchema = z.object({
	id: z.number().int(),
	campId: z.number().int(),
	childId: z.number().int(),
	parentId: z.number().int(),
	accepted: z.boolean(),
	paid: z.boolean()
});
