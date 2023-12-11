'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';

const SidebarItem = ({ path, title }: { path: string; title: string }) => {
	const pathname = usePathname();
	return (
		<li>
			<Link
				className={`link ${pathname === path ? ' bg-darker-green ' : ''}`}
				href={path}
			>
				{title}
			</Link>
		</li>
	);
};

const AdminNavbar = () => (
	<div className="navbar  bg-default-button">
		<div className="flex-1">
			<a href="/admin/center" className="btn btn-ghost text-xl">
				CM Admin center
			</a>
		</div>
		<div className="flex-none">
			<button
				onClick={() => signOut({ callbackUrl: '/admin' })}
				className="btn btn-square btn-ghost"
			>
				Logout
			</button>
		</div>
	</div>
);

const Sidebar = () => (
	<ul className="menu h-full   bg-default-button pt-5">
		<SidebarItem path="/admin/center/camps" title="Camps" />
		<SidebarItem path="/admin/center/instructors" title="Instructors" />
		<SidebarItem path="/admin/center/feeds" title="Feeds" />
	</ul>
);

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const { status } = useSession();
	if (status === 'unauthenticated') {
		redirect('/admin');
	}
	return (
		<div>
			<AdminNavbar />
			<div className="grid h-screen grid-cols-12 gap-4">
				<div className="col-span-2">
					<Sidebar />
				</div>

				<div className="col-span-10">{children}</div>
			</div>
		</div>
	);
};

export default AdminLayout;
