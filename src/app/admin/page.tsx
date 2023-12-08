'use client';

import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const LoginStatus = () => {
	const { status } = useSession();
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
	redirect('/admin/center');
};

export default LoginStatus;
