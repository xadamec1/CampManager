import React from 'react';
import { type SubmitHandler } from 'react-hook-form';
import { Form } from '@saas-ui/forms/zod';

import { type Instructor, type InstructorFormSchema } from '../types/camp';
import { instructorFormSchema } from '../validators/instructor';

const InstructorForm = ({
	currentInstructor,
	onSubmit
}: {
	currentInstructor: Instructor | undefined;
	onSubmit: SubmitHandler<InstructorFormSchema>;
}) => (
	<Form
		schema={instructorFormSchema}
		onSubmit={onSubmit}
		defaultValues={currentInstructor}
		className="flex w-11 flex-col"
		fields={{
			name: {
				label: 'Instructor Name',
				type: 'text'
			},
			email: {
				label: 'Email',
				type: 'text'
			},
			phoneNumber: {
				label: 'Phone Number',
				type: 'text'
			},
			submit: {
				children: 'Save Instructor'
			}
		}}
	/>
);

export default InstructorForm;
