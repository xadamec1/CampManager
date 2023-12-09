'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import { type FeedPostCreateType } from '../validators/feedValidation';

import FeedForm from './FeedForm';

const FeedCreateForm = () => {
	const router = useRouter();
	const useCreateFeed = () =>
		useMutation({
			mutationFn: (feed: FeedPostCreateType) =>
				fetch(`/api/feeds`, {
					method: 'POST',
					body: JSON.stringify(feed),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});
	const { mutate } = useCreateFeed();
	const onSubmit: SubmitHandler<FeedPostCreateType> = data => {
		mutate(
			{
				...data
			},
			{
				onSuccess: _response => {
					router.push(`.`);
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};
	return <FeedForm onSubmit={onSubmit} currentFeed={undefined} />;
};

export default FeedCreateForm;
