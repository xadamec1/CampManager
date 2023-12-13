import React, { type PropsWithChildren } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { type Instructor, type InstructorFormSchema } from '../types/camp';
import { instructorFormSchema } from '../validators/instructor';

const InstructorForm = ({
	children,
	currentInstructor,
	onSubmit
}: PropsWithChildren & {
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
			className="grid gap-3 lg:grid-cols-2 [&>button]:p-3 [&>label>*]:bg-white [&>label>*]:p-3"
		>
			<label htmlFor="name" className="text-sm font-semibold">
				Name:
				<input
					type="text"
					className="w-full"
					defaultValue={currentInstructor?.name}
					id="name"
					{...register('name')}
				/>
				{errors.name && <div className="error-message">Name is required</div>}
			</label>

			<label htmlFor="email" className="text-sm font-semibold">
				Email:
				<input
					className="w-full"
					type="text"
					defaultValue={currentInstructor?.email}
					id="email"
					{...register('email')}
				/>
				{errors.email && <div className="error-message">Wrong email</div>}
			</label>

			<label htmlFor="PhoneNumber" className="text-sm font-semibold">
				Phone Number:
				<input
					type="text"
					className="w-full"
					id="phoneNumber"
					{...register('phoneNumber')}
				/>
			</label>
			<div className="hidden lg:block" />
			<button
				value="Store instructor"
				type="submit"
				className="btn rounded-sm bg-default-button p-3"
			>
				Submit
			</button>
			{children}
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
