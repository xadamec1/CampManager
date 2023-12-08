'use client';

import { type SubmitHandler } from 'react-hook-form';
import { type UseMutationResult } from '@tanstack/react-query';
import { Form } from '@saas-ui/forms/zod';

import { type CampFormSchema, type CampWithAddress } from '../types/camp';
import { campFormSchema } from '../validators/camp';

const CampForm = ({
	currentCamp,
	onSubmit
}: {
	currentCamp: CampWithAddress | undefined;
	onSubmit: SubmitHandler<CampFormSchema>;
}) => (
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

export default CampForm;
