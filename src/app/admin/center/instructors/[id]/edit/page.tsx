import InstructorUpdateForm from '@/app/_components/InstructorUpdateForm';
import { db } from '@/server/db';

type InstructorProps = {
	params: {
		id: number;
	};
};

const EditPage = async ({ params }: InstructorProps) => {
	const instructor = await db.instructor.findUnique({
		where: { id: +params.id }
	});

	return instructor === null ? (
		<div>Unexpected error, try again later</div>
	) : (
		<div className="r-10">
			<InstructorUpdateForm currentInstructor={instructor} />
		</div>
	);
};

export default EditPage;
