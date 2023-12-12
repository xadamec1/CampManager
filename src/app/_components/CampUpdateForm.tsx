'use client';
import { type PropsWithChildren } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import { type CampFormSchema, type CampWithAddress } from '../types/camp';
import { type CampSchemaType } from '../validators/campValidation';

import CampForm from './CampForm';

const CampUpdateForm = ({
	currentCamp
}: PropsWithChildren & { currentCamp: CampWithAddress }) => {
	const router = useRouter();
	const useEditCamp = () =>
		useMutation({
			mutationFn: (camp: CampWithAddress) =>
				fetch(`/api/camp`, {
					method: 'PUT',
					body: JSON.stringify(camp),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const useDeleteCamp = () =>
		useMutation({
			mutationFn: (_camp: CampSchemaType) =>
				fetch(`/api/campById/${currentCamp.id}`, {
					method: 'DELETE',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useEditCamp();
	const deleteMutation = useDeleteCamp();
	const onSubmit: SubmitHandler<CampFormSchema> = data => {
		mutate(
			{
				id: currentCamp.id,
				addressID: currentCamp.addressID,
				...data,
				address: { id: currentCamp.addressID, ...data.address }
			},
			{
				onSuccess: response => {
					console.log(data.name);
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

	const onClick: SubmitHandler<CampSchemaType> = data => {
		deleteMutation.mutate(
			{
				...data
			},
			{
				onSuccess: response => {
					console.log(data.name);
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

	return (
		<CampForm currentCamp={currentCamp} onSubmit={onSubmit}>
			<button
				className="rounded bg-default-button"
				onClick={() => onClick(currentCamp)}
			>
				Delete
			</button>
		</CampForm>
	);
};
export default CampUpdateForm;
