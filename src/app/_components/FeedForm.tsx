import { type PropsWithChildren } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FeedPostSchema, {
	FeedPostCreateSchema,
	type FeedPostCreateType,
	type FeedPostSchemaType
} from '../validators/feedValidation';

const FeedForm = ({
	children,
	currentFeed,
	onSubmit
}: PropsWithChildren & {
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
			className="grid gap-3 lg:grid-cols-2 [&>button]:p-3 [&>label>*]:bg-white [&>label>*]:p-3"
		>
			{errors.imagePath && (
				<div className="error-message">Image Path is required</div>
			)}

			<label htmlFor="title" className="block font-semibold">
				Title:
				<input
					className="w-full rounded border px-3 py-2"
					type="text"
					defaultValue={currentFeed?.title}
					id="title"
					{...register('title', { maxLength: 80 })}
				/>
				{errors.title && <div className="error-message">Title is required</div>}
			</label>

			<label htmlFor="content" className="text-sm font-semibold">
				Content:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="text"
					defaultValue={currentFeed?.content}
					id="content"
					{...register('content')}
				/>
				{errors.content && (
					<div className="error-message">Content is required</div>
				)}
			</label>

			<label htmlFor="imagePath" className="text-sm font-semibold">
				Image Path:
				<input
					type="text"
					className="mt-1 w-full rounded border px-3 py-2"
					id="imagePath"
					{...register('imagePath')}
				/>
			</label>

			<label htmlFor="createdAt" className="text-sm font-semibold">
				Created At:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="date"
					id="createdAt"
					{...register('createdAt', {
						valueAsDate: true
					})}
				/>
				{errors.createdAt && (
					<div className="error-message">Created At is required</div>
				)}
			</label>

			<button type="submit" className="rounded-sm bg-default-button">
				Submit
			</button>

			{children}
		</form>
	);
};

export default FeedForm;
