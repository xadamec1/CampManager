'use client';

import { useFormContext } from 'react-hook-form';

import { type CampRegistration } from '../types/camp';

export const HealthInput = () => {
	const { register, formState } = useFormContext<CampRegistration>();

	const alergiesInput = (
		<label className="mb-2 block">
			Allergies:
			<textarea
				{...register('allergies')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.allergies?.message && (
				<p className="text-red-500">{formState.errors.allergies?.message}</p>
			)}
		</label>
	);

	const dietInput = (
		<label className="mb-2 block">
			Diet:
			<textarea
				{...register('diet')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.diet?.message && (
				<p className="text-red-500">{formState.errors.diet?.message}</p>
			)}
		</label>
	);

	const otherInput = (
		<label className="mb-2 block">
			Other:
			<textarea
				{...register('other')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.other?.message && (
				<p className="text-red-500">{formState.errors.other?.message}</p>
			)}
		</label>
	);

	return (
		<div className="mb-4">
			<h2 className="mb-2 text-lg font-semibold">Health Status</h2>
			{alergiesInput}
			{dietInput}
			{otherInput}
		</div>
	);
};
