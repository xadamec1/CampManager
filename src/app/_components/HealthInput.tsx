'use client';

import { useFormContext } from 'react-hook-form';

import { type CampRegistration } from '../types/camp';

export const HealthInput = () => {
	const { register } = useFormContext<CampRegistration>();

	const alergiesInput = (
		<label className="mb-2 block">
			Allergies:
			<textarea
				{...register('allergies')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
		</label>
	);

	const dietInput = (
		<label className="mb-2 block">
			Diet:
			<textarea
				{...register('diet')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
		</label>
	);

	const otherInput = (
		<label className="mb-2 block">
			Other:
			<textarea
				{...register('other')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
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
