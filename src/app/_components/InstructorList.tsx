import Link from 'next/link';
import { Suspense } from 'react';

import { db } from '@/server/db';

import LoadingComponent from './Loading';

const InstructorList = async () => {
	const instructors = await db.instructor.findMany();
	console.log(instructors[0]);

	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th />
						<th>Instructor name</th>
						<th>Email</th>
						<th>Phone Number</th>
						<th className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<Suspense fallback={<LoadingComponent />}>
						{instructors.map(instructor => (
							<tr key={instructor.id}>
								<th>{instructor.id}</th>
								<td>
									<Link
										href={`./instructors/${instructor.id}`}
										className="font-bold hover:underline"
									>
										{instructor.name}
									</Link>
								</td>
								<td>{instructor.email}</td>
								<td>{instructor.phoneNumber}</td>
								<td className="px-6 text-right">
									<Link
										href={`./instructors/${instructor.id}/edit`}
										className="rounded-lg p-2 font-bold hover:bg-darker-green"
									>
										Edit
									</Link>
								</td>
							</tr>
						))}
					</Suspense>
				</tbody>
			</table>
		</div>
	);
};

export default InstructorList;
