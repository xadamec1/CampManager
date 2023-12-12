import { type z } from 'zod';
import { Prisma } from '@prisma/client';

import {
	type childSchema,
	type campRegistrationSchema,
	type healthStatusSchema,
	type parentSchema
} from '../validators/campRegistration';
import { type campFormSchema } from '../validators/camp';
import {
	type InstructorSchema,
	type instructorFormSchema
} from '../validators/instructor';
import { CampSchemaType } from '../validators/campValidation';

export type CampFormSchema = z.infer<typeof campFormSchema>;
export type Child = z.infer<typeof childSchema>;
export type HealthStatus = z.infer<typeof healthStatusSchema>;
export type Parent = z.infer<typeof parentSchema>;
export type CampRegistration = z.infer<typeof campRegistrationSchema>;
export type Instructor = z.infer<typeof InstructorSchema>;

export type InstructorFormSchema = z.infer<typeof instructorFormSchema>;

const includeAddress = Prisma.validator<Prisma.CampDefaultArgs>()({
	include: { address: true }
});
const includeAddressAndRegistrations =
	Prisma.validator<Prisma.CampDefaultArgs>()({
		include: {
			address: true,
			registration: { include: { parent: true, child: true } }
		}
	});

const registrationSchema = Prisma.validator<Prisma.RegistrationDefaultArgs>()(
	{}
);

// export type CampType = z.infer<CampSchemaType>

export type CampWithAddress = Prisma.CampGetPayload<typeof includeAddress>;
export type CampWithAddressAndRegistrations = Prisma.CampGetPayload<
	typeof includeAddressAndRegistrations
>;
export type RegistrationType = Prisma.RegistrationGetPayload<
	typeof registrationSchema
>;
