import Link from 'next/link';
import { Suspense } from 'react';
import { z } from 'zod';

import { db } from '@/server/db';

import LoadingComponent from './Loading';

const FeedList = async () => {
	const feedPosts = await db.feedPost.findMany();

	console.log(feedPosts[0]);
	return (
		<div className="overflow-x-auto">
			<table className="table">
				<thead>
					<tr>
						<th />
						<th>Post Title</th>
						<th>Content</th>
						<th>Image Path</th>
						<th>Created At</th>
						<th className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<Suspense fallback={<LoadingComponent />}>
						{feedPosts.map(post => (
							<tr key={post.id}>
								<th>{post.id}</th>
								<td>
									<Link
										href={`./feeds/${post.id}`}
										className="font-bold hover:underline"
									>
										{post.title}
									</Link>
								</td>
								<td>{post.content}</td>
								<td>{post.imagePath ?? 'N/A'}</td>
								<td>{post.createdAt.toLocaleString()}</td>

								<td className="px-6 text-right">
									<Link
										href={`./feeds/${post.id}/edit`}
										className="font-bold hover:underline"
									>
										Edit
									</Link>
								</td>
							</tr>
						))}
					</Suspense>
				</tbody>
			</table>
		</div>
	);
};

export default FeedList;
