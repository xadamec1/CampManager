import { z, ZodError } from 'zod';

const commonMessages = {
	stringMin: 'This field is required.',
	stringMax: 'Maximum length exceeded.',
	email: 'Invalid email address.',
	date: 'Invalid date format.',
	number: 'Invalid number.'
};

export const childSchema = z.object({
	name: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(50, { message: commonMessages.stringMax }),
	surname: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(50, { message: commonMessages.stringMax }),
	dateOfBirth: z.date(),
	insuranceCompany: z.string(),
	insuranceCardImage: z.string(), // TODO: store image not a link here
	street: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax }),
	city: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax }),
	postalCode: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax }),
	shirtSize: z.enum(['xxs', 'xs', 's', 'm', 'l', 'xl'])
});

export const healthStatusSchema = z.object({
	allergies: z.string().max(200, { message: 'Maximum length exceeded.' }),
	diet: z.string().max(200, { message: 'Maximum length exceeded.' }),
	other: z.string().max(200, { message: 'Maximum length exceeded.' })
});

export const parentSchema = z.object({
	parentName: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax }),
	parentSurname: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax }),
	email: z
		.string()
		.email({ message: commonMessages.email })
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax }),
	phoneNumber: z
		.string()
		.min(1, { message: commonMessages.stringMin })
		.max(100, { message: commonMessages.stringMax })
});

export const campRegistrationSchema = childSchema
	.extend({
		campId: z.number()
	})
	.and(healthStatusSchema)
	.and(parentSchema);
