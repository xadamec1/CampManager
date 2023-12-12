'use client';

import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import {
	type RegistrationType,
	type CampWithAddressAndRegistrations
} from '../types/camp';

const CampDetails = ({ camp }: { camp: CampWithAddressAndRegistrations }) => {
	const router = useRouter();
	const useDeleteRegistration = () =>
		useMutation({
			mutationFn: (registr: RegistrationType) =>
				fetch(`/api/registerById/${registr.id}`, {
					method: 'DELETE',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useDeleteRegistration();
	const onClick: SubmitHandler<RegistrationType> = data => {
		mutate(
			{
				...data
			},
			{
				onSuccess: response => {
					console.log(data);
					console.log(response);
					router.push(`./`);
				},
				onError: error => {
					console.log(error);
					console.log(data);
				}
			}
		);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-4 text-center text-4xl font-bold">Camp Details</h1>
			<CampCard camp={camp} />
			<h2 className="mb-4 mt-8 text-center text-3xl font-bold">
				Registrations
			</h2>
			<table className="w-full table-auto border-collapse">
				<thead>
					<tr className="bg-gray-200">
						<th className="border px-4 py-2">Child Name</th>
						<th className="border px-4 py-2">Parent Name</th>
						<th className="border px-4 py-2">Accepted</th>
						<th className="border px-4 py-2">Paid</th>
						<th className="border px-4 py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{camp.registration.map(reg => (
						<tr key={reg.id}>
							<td className="border px-4 py-2">
								{`${reg.child.firstName} ${reg.child.lastName}`}
							</td>
							<td className="border px-4 py-2">
								{`${reg.parent.firstName} ${reg.parent.lastName}`}
							</td>
							<td className="border px-4 py-2">
								{reg.accepted ? 'Yes' : 'No'}
							</td>
							<td className="border px-4 py-2">{reg.paid ? 'Yes' : 'No'}</td>
							<td className="border px-4 py-2">
								<button
									className="btn rounded bg-red-500 px-4 py-2 text-white"
									onClick={() => onClick(reg)} // Add your delete function here
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

const CampCard = ({ camp }: { camp: CampWithAddressAndRegistrations }) => (
	<div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
		<div className="p-4">
			<h3 className="text-xl font-semibold text-gray-800">{camp.name}</h3>
			<p className="text-gray-600">{camp.description}</p>
			<div className="mt-4 flex items-center">
				<span className="mr-2 font-bold text-gray-800">{camp.price} CZK</span>
				<span className="text-sm text-gray-600">per child</span>
			</div>
			<div className="mt-2 flex items-center">
				<span className="mr-2 font-bold text-gray-800">{camp.capacity}</span>
				<span className="text-sm text-gray-600">available spots</span>
			</div>
			<div className="mt-2 flex items-center">
				<span className="mr-2 font-bold text-gray-800">
					{`${camp.startDate.toDateString()} - ${camp.endDate.toDateString()}`}
				</span>
				<span className="text-sm text-gray-600">duration</span>
			</div>
		</div>
	</div>
);

export default CampDetails;
