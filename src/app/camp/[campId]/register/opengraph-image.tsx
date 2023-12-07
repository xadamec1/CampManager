import { ImageResponse } from 'next/og';

import CampSchema from '@/app/validators/campValidation';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
	width: 1200,
	height: 630
};

export const contentType = 'image/png';

// Image generation
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default async function Image({
	params
}: {
	params: { campId: string };
}) {
	const path = `http://localhost:3000/api/campById/${params.campId}`;

	console.log(path);
	const camp = await fetch(path, {
		next: { revalidate: 24 * 60 * 60 }
	})
		.then(r => r.json())
		.then(CampSchema.parse);

	await console.log(camp);
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 42,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: 64
				}}
			>
				<h1>{`Kepa Camp/${camp?.name}/registration`}</h1>
				<p>{camp?.description}</p>{' '}
			</div>
		),
		{ ...size }
	);
}
