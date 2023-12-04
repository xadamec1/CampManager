'use client';

import { useFormContext } from 'react-hook-form';

import { type CampRegistration } from '../types/camp';

export const ChildInput = () => {
	const { register, formState } = useFormContext<CampRegistration>();

	const childNameInput = (
		<label className="mb-2 block p-2">
			Name:
			<input
				{...register('name')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.name?.message && (
				<p className="text-red-500">{formState.errors.name?.message}</p>
			)}
		</label>
	);

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

	const childSurnameInput = (
		<label className="mb-2 block p-2">
			Surname:
			<input
				{...register('surname')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.surname?.message && (
				<p className="text-red-500">{formState.errors.surname?.message}</p>
			)}
		</label>
	);

	const childBirthdayInput = (
		<label className="mb-2 block p-2">
			Date of Birth:
			<input
				type="date"
				{...register('dateOfBirth', { valueAsDate: true })}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.dateOfBirth?.message && (
				<p className="text-red-500">{formState.errors.dateOfBirth?.message}</p>
			)}
		</label>
	);

	const childInsuranceCompanyInput = (
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
			{formState.errors.insuranceCompany?.message && (
				<p className="text-red-500">
					{formState.errors.insuranceCompany?.message}
				</p>
			)}
		</label>
	);

	const childInsuranceCardIpnut = (
		<label className="mb-2 block p-2">
			Insurance Card Image:
			<input
				type="file"
				{...register('insuranceCardImage')}
				className="mt-1 w-full rounded border bg-white px-3 py-2"
			/>
		</label>
	);

	const streetInput = (
		<label className="mb-2 block p-2">
			Street:
			<input
				{...register('street')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.street?.message && (
				<p className="text-red-500">{formState.errors.street?.message}</p>
			)}
		</label>
	);

	const zipCodeInput = (
		<label className="mb-2 block p-2">
			Postal Code:
			<input
				{...register('postalCode')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.postalCode?.message && (
				<p className="text-red-500">{formState.errors.postalCode?.message}</p>
			)}
		</label>
	);

	const cityInput = (
		<label className="mb-2 block p-2">
			City:
			<input
				{...register('city')}
				className="mt-1 w-full rounded border px-3 py-2"
			/>
			{formState.errors.city?.message && (
				<p className="text-red-500">{formState.errors.city?.message}</p>
			)}
		</label>
	);

	const shirtSizeInput = (
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
	);

	return (
		<div className="mb-4 grid gap-3 lg:grid-cols-2">
			{childNameInput}

			{childSurnameInput}
			{childBirthdayInput}

			{/* this is here so that relevant data are visualy right next to each other when 2 col
otherwise swap the order of the individual labels for desired display
TODO: decide how to handle this
*/}
			<div className="hidden lg:block" />

			{childInsuranceCompanyInput}

			{childInsuranceCardIpnut}

			{streetInput}

			{zipCodeInput}

			{cityInput}

			{shirtSizeInput}
			{/* Add other child fields similarly */}
		</div>
	);

	// const otherInput = (
	//     <label className="mb-2 block">
	// 				Other:
	// 				<textarea
	// 					{...register('other')}
	// 					className="mt-1 w-full rounded border px-3 py-2"
	// 				/>
	// 			</label>
	// )
};
