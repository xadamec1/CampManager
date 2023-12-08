import CampUpdateForm from '@/app/_components/CampUpdateForm';
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
	return camp === null ? (
		<div>Unexpeted error, try again later</div>
	) : (
		<div className="r-10">
			<CampUpdateForm currentCamp={camp} />
		</div>
	);
};

export default EditPage;
