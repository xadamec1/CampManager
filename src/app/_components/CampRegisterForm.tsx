'use client';
import React from 'react';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { type CampRegistration } from '@/app/types/camp';

import { campRegistrationSchema } from '../validators/campRegistration';

import { ChildInput } from './ChildInput';
import { HealthInput } from './HealthInput';
import { ParentInput } from './ParentInput';

export const CampRegisterForm: React.FC = () => {
	const method = useForm<CampRegistration>({
		resolver: zodResolver(campRegistrationSchema)
	});

	const router = useRouter();

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
		},
		onSuccess: () => {
			router.replace('/');
		}
	});

	const gdprCheckbox = (
		<label className="mb-2 block p-2">
			GDPR Compliance:
			<div>
				<p> with this you are consenting to the processing of your data</p>

				<input
					type="checkbox"
					{...method.register('gdprCheck')}
					className="m-auto"
				/>
				{method.formState.errors.gdprCheck?.message && (
					<p className="text-red-500">
						{method.formState.errors.gdprCheck?.message}
					</p>
				)}
			</div>
		</label>
	);

	const { campId } = useParams();

	const onSubmit: SubmitHandler<CampRegistration> = data => {
		// Handle form submission here
		data.campId = parseInt(campId.toString());
		mutation.mutate(data);
	};

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

				{gdprCheckbox}
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
