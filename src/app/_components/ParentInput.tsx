import { useFormContext } from 'react-hook-form';

import { type CampRegistration } from '../types/camp';

export const ParentInput = () => {
	const { register } = useFormContext<CampRegistration>();

	const parentNameInput = (
		<label className="mb-2 block p-2">
			Parent Name:
			<input
				{...register('parentName')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
		</label>
	);

	const parentSurnameInput = (
		<label className="mb-2 block p-2">
			Parent Surname:
			<input
				{...register('parentSurname')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
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
		</label>
	);

	const parentPhoneInput = (
		<label className="mb-2 block p-2">
			Phone Number:
			<input
				{...register('phoneNumber')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
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
