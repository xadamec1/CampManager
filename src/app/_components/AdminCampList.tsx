import Link from 'next/link';

import { db } from '@/server/db';

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
					{camps.map(camp => (
						<tr key={camp.id}>
							<th>{camp.id}</th>
							<td>{camp.name}</td>
							<td>{camp.organiser}</td>
							<td>{camp.isPublic ? 'Public' : 'Private'}</td>
							<td>{GetCampStatus(camp.startDate, camp.endDate)}</td>
							<td className="px-6 text-right">
								<Link href="#" className="font-bold hover:underline">
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default CampList;
