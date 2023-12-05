'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
	<div className="navbar bg-default-button">
		<div className="flex-1">
			<a className="btn btn-ghost text-xl">CM Admin center</a>
		</div>
		<div className="flex-none">
			<button className="btn btn-square btn-ghost">Logout</button>
		</div>
	</div>
);

const Sidebar = () => {
	return (
		<ul className="menu w-full  bg-default-button pt-10">
			<SidebarItem path={'/admin/center/camps'} title={'Camps'} />
			<SidebarItem path={'/admin/center/instructors'} title={'Instructors'} />
		</ul>
	);
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
	<div>
		<AdminNavbar />
		<div className="grid h-full grid-cols-12 gap-4">
			<div className="col-span-2">
				<Sidebar />
			</div>

			<div className="col-span-10">{children}</div>
		</div>
	</div>
);

export default AdminLayout;
