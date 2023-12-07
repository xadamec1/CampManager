import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../globals.css';
import { Providers } from './_components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Kepa Camp',
		default: 'Kepa Camp'
	},
	description: 'university group project that updates the website for Kepa.fun',
	metadataBase: new URL(process.env.DEPLOY_URL ?? 'http://localhost:3000')
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en">
		<body
			className={`${inter.className} bg-default-background text-default-text`}
		>
			<main className=" ">
				<Providers>{children}</Providers>
			</main>
		</body>
	</html>
);

export default RootLayout;
