'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import {
	FeedPostCreateType,
	type FeedPostSchemaType
} from '../validators/feedValidation';

import FeedForm from './FeedForm';

const FeedUpdateForm = ({
	currentFeed
}: {
	currentFeed: FeedPostSchemaType;
}) => {
	const router = useRouter();
	const useEditFeed = () =>
		useMutation({
			mutationFn: (feed: FeedPostSchemaType) =>
				fetch(`/api/feeds`, {
					method: 'PUT',
					body: JSON.stringify(feed),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useEditFeed();

	const onSubmit: SubmitHandler<FeedPostCreateType> = data => {
		mutate(
			{
				id: currentFeed.id,
				...data
			},
			{
				onSuccess: response => {
					console.log(data.title);
					console.log(response);
					router.push(`./`);
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};
	const useDeleteFeed = () =>
		useMutation({
			mutationFn: (feed: FeedPostSchemaType) =>
				fetch(`/api/feeds`, {
					method: 'DELETE',
					body: JSON.stringify(feed),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const deleteMutation = useDeleteFeed();

	const onClick: SubmitHandler<FeedPostCreateType> = data => {
		deleteMutation.mutate(
			{
				id: currentFeed.id,
				...data
			},
			{
				onSuccess: response => {
					console.log(data.title);
					console.log(response);
					router.push(`/admin/center/feeds`);
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};

	return (
		<>
			<FeedForm currentFeed={currentFeed} onSubmit={onSubmit} />
			<button
				className="bg-default-button"
				onClick={() => onClick(currentFeed)}
			>
				{' '}
				Delete{' '}
			</button>
		</>
	);
};

export default FeedUpdateForm;
