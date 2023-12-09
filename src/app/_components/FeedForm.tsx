// Ensure you import the necessary types and schemas
import { type SubmitHandler } from 'react-hook-form';
import { Form } from '@saas-ui/forms/zod';

import FeedPostSchema, {
	FeedPostCreateSchema,
	FeedPostCreateType,
	FeedPostSchemaType
} from '../validators/feedValidation';

const FeedForm = ({
	currentFeed,
	onSubmit
}: {
	currentFeed: FeedPostSchemaType | undefined;
	onSubmit: SubmitHandler<FeedPostSchemaType>;
}) => (
	<Form
		schema={FeedPostCreateSchema}
		onSubmit={onSubmit}
		defaultValues={currentFeed}
		className="flex w-11 flex-col"
		fields={{
			title: {
				label: 'Title',
				type: 'text'
			},
			content: {
				label: 'Content',
				type: 'textarea'
			},
			imagePath: {
				label: 'Image Path',
				type: 'text'
			},
			createdAt: {
				label: 'Created At',
				columns: 2
			},
			submit: {
				children: 'Save Feed'
			}
		}}
	/>
);

export default FeedForm;
