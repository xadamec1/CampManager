import CampUpdateFormProvider from '@/app/_components/CampUpdateFormProvider';
import { db } from '@/server/db';

type CampProps = {
	params: {
		id: number;
	};
};

const EditPage = async ({ params }: CampProps) => {
	const camp = await db.camp.findUnique({
		where: { id: +params.id },
		include: { address: true }
	});
	return (
		<div className="r-10">
			<CampUpdateFormProvider currentCamp={camp!} />
		</div>
	);
};

export default EditPage;
