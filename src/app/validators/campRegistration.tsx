import { z } from 'zod';

export const childSchema = z.object({
	name: z.string().min(1).max(50),
	surname: z.string().min(1).max(50),
	dateOfBirth: z.date(),
	insuranceCompany: z.string(),
	insuranceCardImage: z.string(), // TODO: store image not a link here
	street: z.string().min(1).max(100),
	city: z.string().min(1).max(100),
	postalCode: z.string().min(1).max(100),
	shirtSize: z.enum(['xxs', 'xs', 's', 'm', 'l', 'xl'])
});

export const healthStatusSchema = z.object({
	allergies: z.string().max(200),
	diet: z.string().max(200),
	other: z.string().max(200)
});

export const parentSchema = z.object({
	parentName: z.string().min(1).max(100),
	parentSurname: z.string().min(1).max(100),
	email: z.string().email().min(1).max(100),
	phoneNumber: z.string().min(1).max(100)
});

export const campRegistrationSchema = childSchema
	.extend({
		campId: z.number()
	})
	.and(healthStatusSchema)
	.and(parentSchema);
