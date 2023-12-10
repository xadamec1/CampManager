import React from 'react';
import Link from 'next/link';
import { Suspense } from 'react';

import { db } from '@/server/db';

import LoadingComponent from './Loading';

const RegistrationList = async () => {
	const registrations = await db.registration.findMany({
		include: {
			camp: {
				include: {
					address: true
				}
			},
			child: true,
			parent: true
		}
	});

	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th />
						<th>Camp name</th>
						<th>Child Name</th>
						<th>Parent Name</th>
						<th>Accepted</th>
						<th>Paid</th>
						<th className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<Suspense fallback={<LoadingComponent />}>
						{registrations.map(registration => (
							<tr key={registration.id}>
								<th>{registration.id}</th>
								<td>
									<Link
										href={`./camps/${registration.camp.id}`}
										className="font-bold hover:underline"
									>
										{registration.camp.name}
									</Link>
								</td>
								<td>
									{registration.child.firstName} {registration.child.lastName}
								</td>
								<td>
									{registration.parent.firstName} {registration.parent.lastName}
								</td>
								<td>{registration.accepted ? 'Yes' : 'No'}</td>
								<td>{registration.paid ? 'Yes' : 'No'}</td>
								<td className="px-6 text-right">
									<Link
										href={`./registrations/${registration.id}/edit`}
										className="font-bold hover:underline"
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

export default RegistrationList;
