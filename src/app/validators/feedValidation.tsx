import { z } from 'zod';

const FeedPostSchema = z.object({
	id: z.number(),
	title: z.string(),
	content: z.string(),
	imagePath: z.string().nullable(),
	createdAt: z.date()
});

export type FeedPostSchemaType = z.infer<typeof FeedPostSchema>;

export default FeedPostSchema;
