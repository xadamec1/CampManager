'use client';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

import { Instructor, type InstructorFormSchema } from '../types/camp';

import InstructorForm from './InstructorForm';

const InstructorUpdateForm = ({
	currentInstructor
}: {
	currentInstructor: Instructor;
}) => {
	const router = useRouter();

	const useEditInstructor = () =>
		useMutation({
			mutationFn: (instructor: InstructorFormSchema) =>
				fetch(`/api/instructor`, {
					method: 'PUT',
					body: JSON.stringify(instructor),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useEditInstructor();

	const onSubmit: SubmitHandler<InstructorFormSchema> = data => {
		mutate(
			{
				id: currentInstructor.id,
				// Add other properties needed for the update
				...data
			},
			{
				onSuccess: response => {
					console.log(data.name);
					console.log(response);
					router.push(`./`); // Redirect to the desired page after successful update
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};

	return (
		<InstructorForm currentInstructor={currentInstructor} onSubmit={onSubmit} />
	);
};

export default InstructorUpdateForm;
