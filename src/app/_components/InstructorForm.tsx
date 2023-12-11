import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type Instructor, type InstructorFormSchema } from '../types/camp';
import { instructorFormSchema } from '../validators/instructor';

const InstructorForm = ({
	currentInstructor,
	onSubmit
}: {
	currentInstructor: Instructor | undefined;
	onSubmit: SubmitHandler<InstructorFormSchema>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InstructorFormSchema>({
		resolver: zodResolver(instructorFormSchema)
	});
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col items-center space-y-4"
		>
			<label htmlFor="name" className="text-sm font-semibold">
				Name:
			</label>
			<input
				type="text"
				defaultValue={currentInstructor?.name}
				id="name"
				{...register('name')}
			/>
			{errors.name && <div className="error-message">Name is required</div>}

			<label htmlFor="email" className="text-sm font-semibold">
				Email:
			</label>
			<input
				type="text"
				defaultValue={currentInstructor?.email}
				id="email"
				{...register('email')}
			/>
			{errors.email && <div className="error-message">Wrong email</div>}

			<label htmlFor="PhoneNumber" className="text-sm font-semibold">
				Phone Number:
			</label>
			<input type="text" id="phoneNumber" {...register('phoneNumber')} />

			<input
				value="Store instructor"
				type="submit"
				className="rounded-sm bg-default-button p-3"
			/>
		</form>
	);
};
// 	<Form
// 		schema={instructorFormSchema}
// 		onSubmit={onSubmit}
// 		defaultValues={currentInstructor}
// 		className="flex w-11 flex-col"
// 		fields={{
// 			name: {
// 				label: 'Instructor Name',
// 				type: 'text'
// 			},
// 			email: {
// 				label: 'Email',
// 				type: 'text'
// 			},
// 			phoneNumber: {
// 				label: 'Phone Number',
// 				type: 'text'
// 			},
// 			submit: {
// 				children: 'Save Instructor'
// 			}
// 		}}
// 	/>
// );

export default InstructorForm;
