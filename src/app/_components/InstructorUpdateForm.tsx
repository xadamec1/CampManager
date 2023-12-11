'use client';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import { type Instructor, type InstructorFormSchema } from '../types/camp';

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

	const useDeleteInstructor = () =>
		useMutation({
			mutationFn: (instructor: InstructorFormSchema) =>
				fetch(`/api/instructor`, {
					method: 'DELETE',
					body: JSON.stringify(instructor),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useEditInstructor();
	const deleteMutation = useDeleteInstructor();

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

	const onClick: SubmitHandler<InstructorFormSchema> = data => {
		deleteMutation.mutate(
			{
				id: currentInstructor.id,
				...data
			},
			{
				onSuccess: response => {
					console.log(data.name);
					console.log(response);
					router.push(`/admin/center/instructors`);
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
			<InstructorForm
				currentInstructor={currentInstructor}
				onSubmit={onSubmit}
			/>
			<button
				className="rounded bg-default-button"
				onClick={() => onClick(currentInstructor)}
			>
				{' '}
				Delete{' '}
			</button>
		</>
	);
};

export default InstructorUpdateForm;
