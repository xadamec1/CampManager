import React from 'react';

import NavbarItem from '@/app/_components/NavbarItem';

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
