import { type z } from 'zod';

import { type instructorFormSchema } from '../validators/instructor';
export type InstructorFormSchemaType = z.infer<typeof instructorFormSchema>;
