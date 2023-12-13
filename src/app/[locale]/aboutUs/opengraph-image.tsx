import { ImageResponse } from 'next/og';

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
export default async function Image() {
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
				<h1>Kepa Camp/AboutUs</h1>
				<p>About us info</p>{' '}
			</div>
		),
		{ ...size }
	);
}
