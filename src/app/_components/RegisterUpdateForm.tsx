'use client';
import { PropsWithChildren } from 'react';
// Update the import path for RegistrationForm
import RegistrationForm from './RegistrationForm';
import { useRouter } from 'next/navigation';

const RegistrationUpdateForm = ({
	currentRegistration
}: PropsWithChildren & { currentRegistration: RegistrationData }) => {
	const router = useRouter();

	const useEditRegistration = () =>
		useMutation({
			mutationFn: (registration: RegistrationData) =>
				fetch(`/api/registration`, {
					method: 'PUT',
					body: JSON.stringify(registration),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
		});

	const { mutate } = useEditRegistration();

	const onSubmit: SubmitHandler<RegistrationFormSchema> = data => {
		mutate(
			{
				id: currentRegistration.id,
				// Add other fields as needed
				...data
			},
			{
				onSuccess: response => {
					console.log(data.name);
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
		<RegistrationForm
			currentRegistration={currentRegistration}
			onSubmit={onSubmit}
		/>
	);
};

export default RegistrationUpdateForm;
