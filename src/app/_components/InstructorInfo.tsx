import React from 'react';

import { type Instructor } from '../types/camp';

const InstructorInfo = (instructor: Instructor) => (
	<div className="rounded-lg p-6 ">
		<h2 className="mb-4 text-2xl font-semibold text-default-text">
			Instructor Information
		</h2>
		<div className="mb-4 flex flex-col">
			<span className="text-lg font-semibold text-default-text">Name:</span>
			<p className="text-lg text-default-text">{instructor.name}</p>
		</div>
		<div className="mb-4 flex flex-col">
			<span className="text-lg font-semibold text-default-text">Email:</span>
			<p className="text-lg text-default-text">{instructor.email}</p>
		</div>
		<div className="mb-4 flex flex-col">
			<span className="text-lg font-semibold text-default-text">
				Phone Number:
			</span>
			<p className="text-lg text-default-text">{instructor.phoneNumber}</p>
		</div>
	</div>
);

export default InstructorInfo;
