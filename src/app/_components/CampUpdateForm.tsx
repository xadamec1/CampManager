'use client';
import { type PropsWithChildren } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { type CampWithAddress } from '../types/camp';

import CampForm from './CampForm';

const CampUpdateForm = ({
	currentCamp
}: PropsWithChildren & { currentCamp: CampWithAddress }) => {
	const useRoute = () => useRouter().push(`.`);
	const useEditCamp = () =>
		useMutation({
			mutationFn: (camp: CampWithAddress) =>
				fetch(`/api/camp`, {
					method: 'PUT',
					body: JSON.stringify(camp),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});
	return (
		<CampForm
			currentCamp={currentCamp}
			mutationFn={useEditCamp}
			routeFn={useRoute}
		/>
	);
};
export default CampUpdateForm;
