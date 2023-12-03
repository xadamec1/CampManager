type PostProps = {
	title: string;
	createdAt: string;
	content: string;
	imagePath: string;
};

const FeedPost = (postData: PostProps) => (
	<div>
		<h1> {postData.title}</h1>
		<p>{postData.createdAt}</p>
		<p>{postData.content}</p>
		<div>{postData.imagePath}</div>
	</div>
);

export default FeedPost;
