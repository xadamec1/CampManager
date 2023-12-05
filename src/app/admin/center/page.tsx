import { getServerAuthSession } from '@/server/auth';

const Profile = async () => {
	const status = await getServerAuthSession();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Hi,
		</main>
	);
};
export default Profile;
