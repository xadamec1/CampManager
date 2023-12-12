import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FeedPostSchema, {
	FeedPostCreateSchema,
	type FeedPostCreateType,
	type FeedPostSchemaType
} from '../validators/feedValidation';

const FeedForm = ({
	currentFeed,
	onSubmit
}: {
	currentFeed: FeedPostSchemaType | undefined;
	onSubmit: SubmitHandler<FeedPostCreateType>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FeedPostCreateType>({
		resolver: zodResolver(FeedPostCreateSchema)
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center space-y-4"
		>
			{errors.imagePath && (
				<div className="error-message">Image Path is required</div>
			)}

			<label htmlFor="title" className="text-sm font-semibold">
				Title:
			</label>
			<input
				type="text"
				defaultValue={currentFeed?.title}
				id="title"
				{...register('title', { maxLength: 80 })}
			/>
			{errors.title && <div className="error-message">Title is required</div>}

			<label htmlFor="content" className="text-sm font-semibold">
				Content:
			</label>
			<input
				type="text"
				defaultValue={currentFeed?.content}
				id="content"
				{...register('content')}
			/>
			{errors.content && (
				<div className="error-message">Content is required</div>
			)}

			<label htmlFor="imagePath" className="text-sm font-semibold">
				Image Path:
			</label>
			<input type="text" id="imagePath" {...register('imagePath')} />

			<label htmlFor="createdAt" className="text-sm font-semibold">
				Created At:
			</label>
			<input
				type="date"
				id="createdAt"
				{...register('createdAt', {
					valueAsDate: true
				})}
			/>
			{errors.createdAt && (
				<div className="error-message">Created At is required</div>
			)}

			<input type="submit" className="rounded-sm bg-default-button p-3" />
		</form>
	);
};

export default FeedForm;
