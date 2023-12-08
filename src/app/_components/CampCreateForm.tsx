'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import { type CampFormSchema } from '../types/camp';

import CampForm from './CampForm';

const CampCreateForm = () => {
	const router = useRouter();
	const useCreateCamp = () =>
		useMutation({
			mutationFn: (camp: CampFormSchema) =>
				fetch(`/api/camp`, {
					method: 'POST',
					body: JSON.stringify(camp),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});
	const { mutate } = useCreateCamp();
	const onSubmit: SubmitHandler<CampFormSchema> = data => {
		mutate(
			{
				...data
			},
			{
				onSuccess: response => {
					console.log(data.name);
					console.log(response);
					router.push(`.`);
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};
	return <CampForm onSubmit={onSubmit} currentCamp={undefined} />;
};
export default CampCreateForm;
