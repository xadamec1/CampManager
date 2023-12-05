import Image from 'next/image';

type PostProps = {
	title: string;
	createdAt: Date;
	content: string;
	imagePath: string | null;
};

const FeedPost = (postData: PostProps) => (
	<div className="mt-4 rounded-lg bg-default-card p-4 shadow-lg">
		<h1 className="mb-2 text-xl font-bold"> {postData.title}</h1>
		<p className="default-text mb-4 text-sm">
			Created at: {postData.createdAt.toUTCString()}
		</p>
		<p className="default-text mb-4">{postData.content}</p>
		{postData.imagePath !== null && (
			<div className="flex justify-center">
				<Image
					src={postData.imagePath}
					alt=""
					width={500}
					height={500}
					className="h-auto w-full max-w-md"
				/>
			</div>
		)}
	</div>
);

export default FeedPost;
