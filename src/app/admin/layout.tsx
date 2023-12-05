// src/app/layout.tsx

import { Providers } from './Providers';

// ...

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<div>
		<Providers>{children}</Providers>
	</div>
);

export default RootLayout;
