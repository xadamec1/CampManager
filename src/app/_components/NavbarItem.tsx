import Link from 'next/link';

const NavbarItem = ({ path, name }: { path: string; name: string }) => (
	<li className="rounded transition duration-300 hover:bg-default-button">
		<Link href={path}>{name}</Link>
	</li>
);

export default NavbarItem;
