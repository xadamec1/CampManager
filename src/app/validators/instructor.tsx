import { z } from 'zod';

export const InstructorSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
	phoneNumber: z.string()
});

export const instructorFormSchema = InstructorSchema.omit({ id: true });
