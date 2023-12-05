import { useFormContext } from 'react-hook-form';

import { type CampRegistration } from '../types/camp';

export const ParentInput = () => {
	const { register, formState } = useFormContext<CampRegistration>();

	const parentNameInput = (
		<label className="mb-2 block p-2">
			Parent Name:
			<input
				{...register('parentName')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.parentName?.message && (
				<p className="text-red-500">{formState.errors.parentName?.message}</p>
			)}
		</label>
	);

	const parentSurnameInput = (
		<label className="mb-2 block p-2">
			Parent Surname:
			<input
				{...register('parentSurname')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.parentSurname?.message && (
				<p className="text-red-500">
					{formState.errors.parentSurname?.message}
				</p>
			)}
		</label>
	);

	const parentEmailInput = (
		<label className="mb-2 block p-2">
			Email:
			<input
				type="email"
				{...register('email')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.email?.message && (
				<p className="text-red-500">{formState.errors.email?.message}</p>
			)}
		</label>
	);

	const parentPhoneInput = (
		<label className="mb-2 block p-2">
			Phone Number:
			<input
				{...register('phoneNumber')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.phoneNumber?.message && (
				<p className="text-red-500">{formState.errors.phoneNumber?.message}</p>
			)}
		</label>
	);

	return (
		<div className="mb-4 grid gap-3 lg:grid-cols-2">
			{parentNameInput}

			{parentSurnameInput}
			{parentEmailInput}

			{parentPhoneInput}
		</div>
	);
};
