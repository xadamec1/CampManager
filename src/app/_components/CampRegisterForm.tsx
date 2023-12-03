'use client';
import React from 'react';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { type CampRegistration } from '@/app/types/camp';

import { ChildInput } from './ChildInput';
import { HealthInput } from './HealthInput';
import { ParentInput } from './ParentInput';

export const CampRegisterForm: React.FC = () => {
	const method = useForm<CampRegistration>();

	const mutation = useMutation({
		mutationFn: async (campForm: CampRegistration) => {
			const resp = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(campForm)
			});
			return await resp.json();
		}
	});

	const { campId } = useParams();

	const onSubmit: SubmitHandler<CampRegistration> = data => {
		// Handle form submission here
		data.campId = parseInt(campId.toString());
		mutation.mutate(data);
	};

	const insuranceCompanies = [
		{ value: 'default', label: '-' },
		{ value: 'vzp-111', label: 'VZP - 111' },
		{ value: 'vozp-201', label: 'VOZP - 201' },
		{ value: 'czpc-205', label: 'CZPC - 205' },
		{ value: 'ozp-207', label: 'OZP - 207' },
		{ value: 'zps-209', label: 'ZPS - 209' },
		{ value: 'zpmv-211', label: 'ZPMV - 211' },
		{ value: 'rbp-213', label: 'RBP - 213' }
	];

	return (
		<form
			onSubmit={method.handleSubmit(onSubmit)}
			className=" mx-auto mt-8 rounded bg-default-card p-6 shadow-md"
		>
			<FormProvider {...method}>
				{/* Part 1: Child Section */}
				<h2 className="mb-2 text-lg font-semibold">Child Information</h2>
				<ChildInput />

				{/* Part 2: Health Status Section */}
				<HealthInput />

				{/* Part 3: Parent Section */}
				<h2 className="mb-2 text-lg font-semibold">Parent Information</h2>
				<ParentInput />
				<button
					type="submit"
					className="rounded bg-default-text px-4 py-2 text-white hover:bg-blue-700"
				>
					Submit
				</button>
			</FormProvider>
		</form>
	);
};
