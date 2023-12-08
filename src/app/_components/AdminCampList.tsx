import Link from 'next/link';
import { Suspense } from 'react';

import { db } from '@/server/db';

import LoadingComponent from './Loading';

const GetCampStatus = (startDate: Date, endDate: Date) => {
	const now = new Date();
	if (now < startDate) {
		return 'Pending';
	} else if (now > endDate) {
		return 'Ended';
	} else {
		return 'Active';
	}
};

const CampList = async () => {
	const camps = await db.camp.findMany();
	console.log(camps[0]);
	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th />
						<th>Camp name</th>
						<th>Organizer</th>
						<th>Is public</th>
						<th>State</th>
						<th className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<Suspense fallback={<LoadingComponent />}>
						{camps.map(camp => (
							<tr key={camp.id}>
								<th>{camp.id}</th>
								<td>
									<Link
										href={`./camps/${camp.id}`}
										className="font-bold hover:underline"
									>
										{camp.name}
									</Link>
								</td>
								<td>{camp.organiser}</td>
								<td>{camp.isPublic ? 'Public' : 'Private'}</td>
								<td>{GetCampStatus(camp.startDate, camp.endDate)}</td>
								<td className="px-6 text-right">
									<Link
										href={`./camps/${camp.id}/edit`}
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
export default CampList;
