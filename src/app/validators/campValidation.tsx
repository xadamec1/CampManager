import { z } from 'zod';

const CampSchema = z.object({
	id: z.number(),
	addressID: z.number(),
	name: z.string(),
	organiser: z.string(),
	notes: z.string(),
	neededEquipment: z.string(),
	description: z.string(),
	imagePath: z.string(),
	capacity: z.number(),
	price: z.number(),
	isRegistrationOpen: z.boolean(),
	isPublic: z.boolean()
});

export type CampSchemaType = z.infer<typeof CampSchema>;

export default CampSchema;
