import React from 'react';

import NavbarItem from '@/app/_components/NavbarItem';

const CampLayout = ({
	children,
	params
}: {
	children: React.ReactNode;
	params: { campId: number };
}) => (
	<div>
		<nav className="my-auto bg-default-card">
			<ul className=" container mx-auto flex items-center justify-between px-10 py-4">
				<NavbarItem path="/" name="Other available camps" />
				<NavbarItem path={`/camp/${params.campId}/register`} name="Register" />
				<NavbarItem path={`/camp/${params.campId}/aboutUs`} name="Contacts" />
			</ul>
		</nav>
		{children}
	</div>
);

export default CampLayout;
