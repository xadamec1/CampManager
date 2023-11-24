// TentLogo.tsx
import React from 'react';

const Logo: React.FC = () => (
	<svg
		className="h-16 w-16 text-center text-default-text"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M21 8l-9.5 9.5L2 8"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M21 12v6m0-6l-9.5 9.5L2 6"
		/>
	</svg>
);

export default Logo;
