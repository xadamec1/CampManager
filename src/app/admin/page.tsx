// src/app/LoginStatus.tsx

'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const LoginStatus = () => {
	const { data, status } = useSession();
	if (status === 'loading') return <div>loading...</div>;
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
