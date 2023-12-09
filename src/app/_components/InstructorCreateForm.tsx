'use client';

import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import { type InstructorFormSchema } from '../types/camp';

import InstructorForm from './InstructorForm';

const InstructorCreateForm = () => {
	const router = useRouter();

	const useCreateInstructor = () =>
		useMutation({
			mutationFn: (instructor: InstructorFormSchema) =>
				fetch(`/api/instructor`, {
					method: 'POST',
					body: JSON.stringify(instructor),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useCreateInstructor();

	const onSubmit: SubmitHandler<InstructorFormSchema> = data => {
		mutate(
			{
				...data
			},
			{
				onSuccess: _response => {
					router.push(`.`); // Redirect to the desired page after successful creation
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};

	return <InstructorForm onSubmit={onSubmit} currentInstructor={undefined} />;
};

export default InstructorCreateForm;
