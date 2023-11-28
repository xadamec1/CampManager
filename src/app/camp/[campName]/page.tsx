import React from 'react';

type CampProps = {
	params: {
		campName: string;
	};
};

const CampPage = ({ params }: CampProps) => (
	<p>Camp is nice, camp is fine {params.campName}</p>
);

export default CampPage;
