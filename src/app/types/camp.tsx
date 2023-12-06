import { type z } from 'zod';
import { Prisma } from '@prisma/client'

import {
	type childSchema,
	type campRegistrationSchema,
	type healthStatusSchema,
	type parentSchema
} from '../validators/campRegistration';
import {
	campSchema,
	type campFormSchema,
	addressSchema
} from '../validators/camp';

// const CampWithAddress = campSchema.extend({ address: addressSchema });
// export type CampWithAddress = z.infer<typeof CampWithAddress>;
export type CampFormSchema = z.infer<typeof campFormSchema>;
export type Child = z.infer<typeof childSchema>;
export type HealthStatus = z.infer<typeof healthStatusSchema>;
export type Parent = z.infer<typeof parentSchema>;
export type CampRegistration = z.infer<typeof campRegistrationSchema>;

const includeAddress = Prisma.validator<Prisma.CampDefaultArgs>()({
  include: { address: true },
});

// 3: This type will include a user and all their posts
export type CampWithAddress = Prisma.CampGetPayload<typeof includeAddress>;