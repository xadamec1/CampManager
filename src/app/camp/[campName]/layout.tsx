import Link from 'next/link';
import React from 'react';

const CampLayout = ({
	children,
	campName
}: {
	children: React.ReactNode;
	campName: string;
}) => (
	<div>
		<nav className="bg-default-card">
			<ul className="container mx-auto flex gap-x-6 px-10 py-4">
				<li>
					<Link href="/">Other available camps</Link>
				</li>
				<li>
					<Link href={`/camp/${campName}/about`}>About camp</Link>
				</li>
				<li>
					<Link href={`/camp/${campName}/register`}>Register</Link>
				</li>
				<li>
					<Link href={`/camp/${campName}/news`}>Camp news</Link>
				</li>
				<li>
					<Link href={`/camp/${campName}/contact`}>Contacts</Link>
				</li>
			</ul>
		</nav>
		{children}
	</div>
);

export default CampLayout;
