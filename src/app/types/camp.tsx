import { type z } from 'zod';
import { Prisma } from '@prisma/client';

import {
	type childSchema,
	type campRegistrationSchema,
	type healthStatusSchema,
	type parentSchema,
	type InstructorSchema
} from '../validators/campRegistration';
import { type campFormSchema } from '../validators/camp';

export type CampFormSchema = z.infer<typeof campFormSchema>;
export type Child = z.infer<typeof childSchema>;
export type HealthStatus = z.infer<typeof healthStatusSchema>;
export type Parent = z.infer<typeof parentSchema>;
export type CampRegistration = z.infer<typeof campRegistrationSchema>;
export type Instructor = z.infer<typeof InstructorSchema>;

const includeAddress = Prisma.validator<Prisma.CampDefaultArgs>()({
	include: { address: true }
});

export type CampWithAddress = Prisma.CampGetPayload<typeof includeAddress>;
