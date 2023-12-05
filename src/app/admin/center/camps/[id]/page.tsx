type CampProps = {
	params: {
		id: number;
	};
};

const EditPage = async ({ params }: CampProps) => (
	<div>
		<h1>Edit Camp {params.id}</h1>
	</div>
);
export default EditPage;
