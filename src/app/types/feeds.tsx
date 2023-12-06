import { type z } from 'zod';

import type FeedPostSchema from '../validators/feedValidation';

export type FeedPost = z.infer<typeof FeedPostSchema>;
