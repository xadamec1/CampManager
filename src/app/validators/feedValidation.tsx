import { z } from 'zod';

const FeedPostSchema = z.object({
	id: z.number(),
	title: z.string(),
	content: z.string(),
	imagePath: z.string().nullable(),
	createdAt: z.coerce.date()
});

export const FeedPostCreateSchema = FeedPostSchema.omit({ id: true });

export type FeedPostSchemaType = z.infer<typeof FeedPostSchema>;
export type FeedPostCreateType = z.infer<typeof FeedPostCreateSchema>;

export default FeedPostSchema;
