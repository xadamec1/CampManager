import Image from 'next/image';

const Gallery = async ({
	photoLinks
}: {
	photoLinks:
		| {
				id: number;
				campId: number;
				src: string;
		  }[]
		| undefined;
}) => (
	<div>
		<div>Gallery</div>
		{photoLinks === undefined ? (
			'No photos found'
		) : (
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
				{photoLinks.map((image, index) => (
					<Image
						key={index}
						width={300}
						height={300}
						src={image.src}
						alt="alt"
						className="h-auto max-w-full rounded-lg"
					/>
				))}
			</div>
		)}
	</div>
);

export default Gallery;
