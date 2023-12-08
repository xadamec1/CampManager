import { type Metadata } from 'next';

import { CampRegisterForm } from '@/app/_components/CampRegisterForm';
import { db } from '@/server/db';

export const generateMetadata = async ({
	params
}: {
	params: { campId: string };
}): Promise<Metadata> => {
	const camp = await db.camp.findUnique({
		where: {
			id: +params.campId
		}
	});

	return {
		title: `Registration: ${camp?.name}`,
		description: `registration for camp ${camp?.name}`
	};
};

const registerPage = () => <CampRegisterForm />;

export default registerPage;
