import React from 'react';

type CampProps = {
	params: {
		campId: number;
	};
};

const CampPage = ({ params }: CampProps) => (
	<p>Camp is nice, camp is fine {params.campId}</p>
);

export default CampPage;
