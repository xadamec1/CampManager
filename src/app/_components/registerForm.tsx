'use client';

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { type CampRegistration } from '@/app/types/camp';

const CampRegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CampRegistration>();

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
			onSubmit={handleSubmit(onSubmit)}
			className=" mx-auto mt-8 rounded bg-default-card p-6 shadow-md"
		>
			{/* Part 1: Child Section */}
			<h2 className="mb-2 text-lg font-semibold">Child Information</h2>

			<div className="mb-4 grid gap-3 lg:grid-cols-2">
				<label className="mb-2 block p-2">
					Name:
					<input
						{...register('name')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>

				<label className="mb-2 block p-2">
					Surname:
					<input
						{...register('surname')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>

				<label className="mb-2 block p-2">
					Date of Birth:
					<input
						type="date"
						{...register('dateOfBirth')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>

				{/* this is here so that relevant data are visualy right next to each other when 2 col
				 otherwise swap the order of the individual labels for desired display
				TODO: decide how to handle this
				*/}
				<div className="hidden lg:block" />

				<label className="mb-2 block p-2">
					Insurance Company:
					<select
						{...register('insuranceCompany')}
						className="mt-1 w-full rounded border px-3 py-2"
					>
						{insuranceCompanies.map(company => (
							<option key={company.value} value={company.value}>
								{company.label}
							</option>
						))}
					</select>
				</label>

				<label className="mb-2 block p-2">
					Insurance Card Image:
					<input
						type="file"
						{...register('insuranceCardImage')}
						className="mt-1 w-full rounded border bg-white px-3 py-2"
					/>
				</label>

				<label className="mb-2 block p-2">
					Street:
					<input
						{...register('street')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				<label className="mb-2 block p-2">
					Postal Code:
					<input
						{...register('postalCode')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>

				<label className="mb-2 block p-2">
					City:
					<input
						{...register('city')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>

				<label className="mb-2 block p-2">
					Shirt Size:
					<select
						{...register('shirtSize')}
						className="mt-1 w-full rounded border px-3 py-2"
					>
						<option value="xxs">XXS</option>
						<option value="xs">XS</option>
						<option value="s">S</option>
						<option value="m">M</option>
						<option value="l">L</option>
						<option value="xl">XL</option>
					</select>
				</label>
				{/* Add other child fields similarly */}
			</div>

			{/* Part 2: Health Status Section */}
			<div className="mb-4">
				<h2 className="mb-2 text-lg font-semibold">Health Status</h2>
				{/* Add Tailwind classes to labels and textareas */}
				<label className="mb-2 block">
					Allergies:
					<textarea
						{...register('allergies')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				<label className="mb-2 block">
					Diet:
					<textarea
						{...register('diet')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				<label className="mb-2 block">
					Other:
					<textarea
						{...register('other')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				{/* Add other health status fields similarly */}
			</div>

			{/* Part 3: Parent Section */}
			<h2 className="mb-2 text-lg font-semibold">Parent Information</h2>

			<div className="mb-4 grid gap-3 lg:grid-cols-2">
				<label className="mb-2 block p-2">
					Parent Name:
					<input
						{...register('parentName')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				<label className="mb-2 block p-2">
					Parent Surname:
					<input
						{...register('parentSurname')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				<label className="mb-2 block p-2">
					Email:
					<input
						type="email"
						{...register('email')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>

				<label className="mb-2 block p-2">
					Phone Number:
					<input
						{...register('phoneNumber')}
						className="mt-1 w-full rounded border px-3 py-2"
					/>
				</label>
				{/* Add other parent fields similarly */}
			</div>

			<button
				type="submit"
				className="rounded bg-green-700 px-4 py-2 text-white hover:bg-blue-700"
			>
				Submit
			</button>
		</form>
	);
};

export default CampRegisterForm;
