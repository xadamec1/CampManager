import { type z } from 'zod';

import {
	type childSchema,
	type campRegistrationSchema,
	type healthStatusSchema,
	type parentSchema
} from '../validators/campRegistration';

export type Child = z.infer<typeof childSchema>;
export type HealthStatus = z.infer<typeof healthStatusSchema>;
export type Parent = z.infer<typeof parentSchema>;
export type CampRegistration = z.infer<typeof campRegistrationSchema>;
