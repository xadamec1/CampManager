'use client';
// Ensure you import the necessary types and schemas
import { useForm, type SubmitHandler } from 'react-hook-form';

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
}) => {
	const { register, handleSubmit } = useForm<FeedPostSchemaType>();
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center space-y-4"
		>
			<label htmlFor="title" className="text-sm font-semibold">
				Title:
			</label>
			<input
				defaultValue={currentFeed?.title}
				type="text"
				id="title"
				className="input input-bordered w-full max-w-xs"
				{...register('title', { required: true, maxLength: 80 })}
			/>

			<label htmlFor="content" className="text-sm font-semibold">
				Content:
			</label>
			<input
				defaultValue={currentFeed?.content}
				type="text"
				id="content"
				className="input input-bordered w-full max-w-xs"
				{...register('content', { required: true, maxLength: 800 })}
			/>

			<label htmlFor="imagePath" className="text-sm font-semibold">
				Image Path:
			</label>
			<input
				type="text"
				id="imagePath"
				className="input input-bordered w-full max-w-xs"
				{...register('imagePath', { required: true, maxLength: 80 })}
			/>

			<label htmlFor="createdAt" className="text-sm font-semibold">
				Created At:
			</label>
			<input
				type="date"
				id="createdAt"
				{...register('createdAt', {
					required: true,
					maxLength: 80,
					valueAsDate: true
				})}
			/>

			{/* <label htmlFor="file" className="text-sm font-semibold">
				File:
			</label>
			<input type="file" id="file" {...register('file', { required: true })} /> */}

			<input type="submit" className="rounded-sm bg-default-button p-3" />
		</form>
	);
};

export default FeedForm;
