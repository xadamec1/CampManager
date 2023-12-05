import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	// Seed Address
	const address1 = await prisma.address.create({
		data: {
			streetNumber: '123 Main Street',
			city: 'Example City',
			zipCode: '12345',
			notes: 'Some notes about the address'
		}
	});

	// Seed Camp
	const camp1 = await prisma.camp.create({
		data: {
			address: {
				connect: { id: address1.id }
			},
			name: 'Summer Camp 2023',
			organiser: 'Organiser Name',
			notes: 'Some notes about the camp',
			neededEquipment: 'Tents, Sleeping Bags, etc.',
			description: 'Description of the camp',
			capacity: 100,
			price: 50,
			isRegistrationOpen: true,
			isPublic: true,
			startDate: new Date(),
			endDate: new Date(),
			imagePath: '/camping_fun_h.webp'
		}
	});
	await prisma.camp.create({
		data: {
			address: {
				connect: { id: address1.id }
			},
			name: 'Summer Camp 2023 2',
			organiser: 'Organiser Name 2',
			notes: 'Some notes about the camp',
			neededEquipment: 'Tents, Sleeping Bags, etc.',
			description: 'Description of the camp',
			capacity: 25,
			price: 5000,
			isRegistrationOpen: true,
			isPublic: true,
			startDate: new Date(),
			endDate: new Date(),
			imagePath: '/camping_fun_h.webp'
		}
	});
	await prisma.camp.create({
		data: {
			address: {
				connect: { id: address1.id }
			},
			name: 'Summer Camp 2023 3',
			organiser: 'Organiser Name 3',
			notes: 'Some notes about the camp',
			neededEquipment: 'Tents, Sleeping Bags, etc.',
			description: 'Description of the camp',
			capacity: 25,
			price: 5000,
			isRegistrationOpen: true,
			isPublic: true,
			startDate: new Date(),
			endDate: new Date(),
			imagePath: '/camping_fun_h.webp'
		}
	});

	// Seed Children
	const child1 = await prisma.children.create({
		data: {
			address: {
				connect: { id: address1.id }
			},
			firstName: 'John',
			lastName: 'Doe',
			allergies: 'None',
			diet: 'Vegetarian',
			birthDate: '2005-01-01',
			insuranceCompany: 123456789
		}
	});

	// Seed Parent
	const parent1 = await prisma.parent.create({
		data: {
			firstName: 'Jane',
			lastName: 'Doe',
			phoneNumber: '123-456-7890',
			email: 'jane.doe@example.com'
		}
	});

	// Seed Registration
	await prisma.registration.create({
		data: {
			camp: {
				connect: { id: camp1.id }
			},
			child: {
				connect: { id: child1.id }
			},
			parent: {
				connect: { id: parent1.id }
			},
			accepted: true,
			paid: true
		}
	});
	await prisma.feedPost.create({
		data: {
			createdAt: new Date(),
			title: 'Camp registration is now open',
			content:
				"We are excited to announce that our summer camp registration is now open! If you are looking for a fun and educational experience for your kids, look no further than our camp. We offer a variety of activities, such as arts and crafts, sports, games, nature walks, and more. Our camp counselors are trained and certified to ensure a safe and enjoyable environment for all. Don't miss this opportunity to make lasting memories with your children. Visit our website to learn more and sign up today!",
			imagePath: '/camping_fun_h.webp'
		}
	});

	await prisma.feedPost.create({
		data: {
			createdAt: new Date(),
			title: 'Camp finished',
			content:
				"What a wonderful week we had at our summer camp! We want to thank all the parents and kids who participated in our amazing program. We had so much fun exploring, learning, and playing together. Some of the highlights were the scavenger hunt, the talent show, the campfire, and the water balloon fight. We hope you enjoyed it as much as we did. Please share your feedback and photos with us on our social media pages. We can't wait to see you again next year!"
		}
	});

	await prisma.galleryPhoto.create({
		data: {
			src: 'https://lh3.googleusercontent.com/drive-storage/AKHj6E78RfyaU4r4UsNVjD6rRgVMHm9jZWvKJ_PzkQpiAoYmf4vXux0kLfmMCFpu27HwgHvxJorM2_rOSD95vKIg62EQPVH-pcNOfUDxF-TbsQ=s1920',
			camp: {
				connect: { id: camp1.id }
			}
		}
	});
	await prisma.galleryPhoto.create({
		data: {
			src: 'https://lh3.googleusercontent.com/drive-storage/AKHj6E78RfyaU4r4UsNVjD6rRgVMHm9jZWvKJ_PzkQpiAoYmf4vXux0kLfmMCFpu27HwgHvxJorM2_rOSD95vKIg62EQPVH-pcNOfUDxF-TbsQ=s1920',
			camp: {
				connect: { id: camp1.id }
			}
		}
	});

	await prisma.galleryPhoto.create({
		data: {
			src: 'https://lh3.googleusercontent.com/drive-storage/AKHj6E4xgU5GB579_cHiJdmGCJ7wSqlGYRclF5lekV2vVUvUhHLwyu5QO4yTTXKuoInloKEkdKcSptOwg_5I4AjLdnfLqml3XQz4jo4kh07wDg=s1920',
			camp: {
				connect: { id: camp1.id }
			}
		}
	});

	await prisma.galleryPhoto.create({
		data: {
			src: 'https://lh3.googleusercontent.com/drive-storage/AKHj6E4W5nqQAmnHcQJ2JYeCpuv0rawBn9cGXHm059G3zTzFagKnPCtQdU9gTO6-stgzilR4QYmhoByuHC2JNRPae52y9gF1Rs0wcNSDfbeJNQ=s1920',
			camp: {
				connect: { id: camp1.id }
			}
		}
	});
	console.log('Seed data inserted successfully');
};

main()
	.catch(e => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
