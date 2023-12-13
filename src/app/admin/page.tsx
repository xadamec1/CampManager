'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const LoginStatus = () => {
	const { data, status } = useSession();
	if (status === 'loading')
		return (
			<div className="flex h-screen flex-col items-center justify-center">
				<span className="loading loading-spinner loading-lg" />{' '}
			</div>
		);
	if (status === 'unauthenticated') {
		return (
			<div className="flex h-screen flex-col items-center justify-center">
				<h1 className="m-8 text-lg"> Camp manager Administration Center</h1>

				<button
					onClick={() => signIn('discord')}
					className="rounded border border-white bg-default-button p-3"
				>
					Sign in with Discord
				</button>
			</div>
		);
	}
	const admins = [
		'petr.adamec@skaut.cz',
		'12marting02@gmail.com',
		'andrej.cermak1999@gmail.com'
	];

	if (admins.includes(data?.user.email as string)) {
		redirect('/admin/center');
	}
	signOut();
	redirect('/');
};

export default LoginStatus;
