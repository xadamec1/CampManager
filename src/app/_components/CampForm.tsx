import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropsWithChildren } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { CampFormSchema, CampWithAddress } from '../types/camp'; // Assuming these types are available
import { campFormSchema } from '../validators/camp'; // Assuming this validation schema is available

const CampForm = ({
	children,
	currentCamp,
	onSubmit
}: PropsWithChildren & {
	currentCamp: CampWithAddress | undefined;
	onSubmit: SubmitHandler<CampFormSchema>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CampFormSchema>({
		resolver: zodResolver(campFormSchema),
		defaultValues: currentCamp
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid gap-3 lg:grid-cols-2 [&>button]:p-3 [&>label>*]:bg-white [&>label>*]:p-3"
		>
			{errors.name && (
				<div className="error-message">Camp Name is required</div>
			)}

			<label htmlFor="name" className="block font-semibold">
				Camp Name:
				<input
					className="w-full rounded border px-3 py-2"
					type="text"
					id="name"
					{...register('name', { required: true })}
				/>
				{errors.name && (
					<div className="error-message">Camp Name is required</div>
				)}
			</label>

			<label htmlFor="organiser" className="block font-semibold">
				Organizer:
				<input
					className="w-full rounded border px-3 py-2"
					type="text"
					id="organiser"
					{...register('organiser', { required: true })}
				/>
				{errors.organiser && (
					<div className="error-message">Organizer is required</div>
				)}
			</label>

			<label htmlFor="notes" className="block text-sm font-semibold">
				Notes:
				<textarea
					className="mt-1 w-full rounded border px-3 py-2"
					id="notes"
					{...register('notes')}
				/>
				{errors.notes && <div className="error-message">Notes is required</div>}
			</label>

			<label htmlFor="neededEquipment" className="block text-sm font-semibold">
				Needed Equipment:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="text"
					id="neededEquipment"
					{...register('neededEquipment')}
				/>
				{errors.neededEquipment && (
					<div className="error-message">Needed Equipment is required</div>
				)}
			</label>

			<label htmlFor="description" className="block text-sm font-semibold">
				Camp Description:
				<textarea
					className="mt-1 w-full rounded border px-3 py-2"
					id="description"
					{...register('description', { required: true })}
				/>
				{errors.description && (
					<div className="error-message">Camp Description is required</div>
				)}
			</label>

			<label htmlFor="imagePath" className="block text-sm font-semibold">
				Image Path:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="text"
					id="imagePath"
					{...register('imagePath')}
				/>
				{errors.imagePath && (
					<div className="error-message">Image Path is required</div>
				)}
			</label>

			<label htmlFor="capacity" className="block text-sm font-semibold">
				Capacity:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="number"
					id="capacity"
					{...register('capacity', { required: true })}
				/>
				{errors.capacity && (
					<div className="error-message">Capacity is required</div>
				)}
			</label>

			<label htmlFor="price" className="block text-sm font-semibold">
				Price:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="number"
					id="price"
					{...register('price', { required: true })}
				/>
				{errors.price && <div className="error-message">Price is required</div>}
			</label>

			<label
				htmlFor="isRegistrationOpen"
				className="mt-4 block text-sm font-semibold"
			>
				<input
					className="form-checkbox h-4 w-4 border-indigo-600 text-indigo-600 focus:ring-indigo-500"
					type="checkbox"
					id="isRegistrationOpen"
					{...register('isRegistrationOpen')}
				/>
				<span className="ml-2">Is Registration Open</span>
			</label>

			<label htmlFor="isPublic" className="mt-4 block text-sm font-semibold">
				<input
					className="form-checkbox h-4 w-4 border-indigo-600 text-indigo-600 focus:ring-indigo-500"
					type="checkbox"
					id="isPublic"
					{...register('isPublic')}
				/>
				<span className="ml-2">Is Public</span>
			</label>

			<label htmlFor="startDate" className="block text-sm font-semibold">
				Start Date:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="date"
					id="startDate"
					{...register('startDate', { required: true })}
				/>
				{errors.startDate && (
					<div className="error-message">Start Date is required</div>
				)}
			</label>

			<label htmlFor="endDate" className="block text-sm font-semibold">
				End Date:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="date"
					id="endDate"
					{...register('endDate', { required: true })}
				/>
				{errors.endDate && (
					<div className="error-message">End Date is required</div>
				)}
			</label>

			<label
				htmlFor="address.streetNumber"
				className="block text-sm font-semibold"
			>
				Street Number:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="text"
					id="address.streetNumber"
					{...register('address.streetNumber')}
				/>
				{errors.address?.streetNumber && (
					<div className="error-message">Street Number is required</div>
				)}
			</label>

			<label htmlFor="address.city" className="block text-sm font-semibold">
				City:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="text"
					id="address.city"
					{...register('address.city')}
				/>
				{errors.address?.city && (
					<div className="error-message">City is required</div>
				)}
			</label>

			<label htmlFor="address.zipCode" className="block text-sm font-semibold">
				Zip Code:
				<input
					className="mt-1 w-full rounded border px-3 py-2"
					type="text"
					id="address.zipCode"
					{...register('address.zipCode')}
				/>
				{errors.address?.zipCode && (
					<div className="error-message">Zip Code is required</div>
				)}
			</label>

			<label htmlFor="address.notes" className="block text-sm font-semibold">
				Address Notes:
				<textarea
					className="mt-1 w-full rounded border px-3 py-2"
					id="address.notes"
					{...register('address.notes')}
				/>
				{errors.address?.notes && (
					<div className="error-message">Address Notes is required</div>
				)}
			</label>

			<button type="submit" className="rounded-sm bg-default-button">
				Save Camp
			</button>

			{children}
		</form>
	);
};

export default CampForm;
