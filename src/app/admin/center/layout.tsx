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

const Sidebar = () => {
	return (
		<ul className="menu mt-10  bg-default-button">
			<SidebarItem path={'/admin/center/camps'} title={'Camps'} />
			<SidebarItem path={'/admin/center/instructors'} title={'Instructors'} />
		</ul>
	);
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
	<div className="grid grid-cols-12 gap-4">
		<div className="col-span-2">
			<Sidebar />
		</div>

		<div className="col-span-10">{children}</div>
	</div>
);

export default AdminLayout;
