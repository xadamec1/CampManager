import React from 'react';
import Link from 'next/link';

const NavbarItem = ({ path, name }: { path: string; name: string }) => (
	<li className="rounded transition duration-300 hover:bg-default-button">
		<Link href={path}>{name}</Link>
	</li>
);

const CampLayout = ({
	children,
	campName
}: {
	children: React.ReactNode;
	campName: string;
}) => (
	<div>
		<nav className="my-auto bg-default-card">
			<ul className=" container mx-auto flex items-center justify-between px-10 py-4">
				<NavbarItem path="/" name="Other available camps" />
				<NavbarItem path={`/camp/${campName}/about`} name="About camp" />
				<NavbarItem path={`/camp/${campName}/register`} name="Register" />
				<NavbarItem path={`/camp/${campName}/news`} name="Camp news" />
				<NavbarItem path={`/camp/${campName}/contact`} name="Contacts" />
			</ul>
		</nav>
		{children}
	</div>
);

export default CampLayout;
