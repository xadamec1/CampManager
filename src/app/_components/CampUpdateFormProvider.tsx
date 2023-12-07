'use client';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { type PropsWithChildren } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Prisma, type Camp } from '@prisma/client';
import { Form } from '@saas-ui/forms/zod';

import { type CampWithAddress, type CampFormSchema } from '../types/camp';
import { campFormSchema } from '../validators/camp';

const CampUpdateFormProvider = ({
	currentCamp
}: PropsWithChildren & { currentCamp: CampWithAddress }) => {
	const useEditCamp = () =>
		useMutation({
			mutationFn: (camp: Camp) =>
				fetch(`/api/camp`, {
					method: 'PUT',
					body: JSON.stringify(camp),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});
	const { mutate } = useEditCamp();
	const router = useRouter();
	const onSubmit: SubmitHandler<CampFormSchema> = data => {
		mutate(
			{ id: currentCamp.id, addressID: currentCamp.addressID, ...data },
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
	return (
		<Form
			schema={campFormSchema}
			onSubmit={onSubmit}
			defaultValues={currentCamp}
			className="flex w-11 flex-col"
			fields={{
				'isPublic': {
					label: 'Make public',
					type: 'checkbox',
					className: 'btn'
				},
				'isRegistrationOpen': {
					label: 'Open registration',
					type: 'checkbox',
					className: 'btn'
				},
				'description': {
					label: 'Camp description',
					type: 'textarea'
				},
				'startDate': {
					className: 'flex',
					columns: 2
				},
				'endDate': {
					className: 'flex',
					columns: 2
				},
				'address.streetNumber': {
					label: 'Street number'
				},
				'address.city': {
					label: 'City'
				},
				'address.zipCode': {
					label: 'Zip code'
				},
				'address.notes': {
					label: 'Address notes',
					type: 'textarea'
				},
				'address': {
					type: 'object',
					label: 'Address'
				},
				'submit': {
					children: 'Save post'
				}
			}}
		/>
	);
};
export default CampUpdateFormProvider;
