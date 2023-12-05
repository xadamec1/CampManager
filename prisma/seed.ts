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
			name: 'Summer Camp 2024',
			organiser: 'Organiser Name',
			notes: 'Some notes about the camp',
			neededEquipment: 'Tents, Sleeping Bags, etc.',
			description: 'Description of the camp',
			capacity: 100,
			price: 50,
			isRegistrationOpen: true,
			isPublic: true,
			startDate: new Date('2024-08-1'),
			endDate: new Date('2024-08-7'),
			imagePath: '/camping_fun_h.webp'
		}
	});
	await prisma.camp.create({
		data: {
			address: {
				connect: { id: address1.id }
			},
			name: 'Currently Running Camp',
			organiser: 'Organiser Name 2',
			notes: 'Some notes about the camp',
			neededEquipment: 'Tents, Sleeping Bags, etc.',
			description: 'Description of the camp',
			capacity: 25,
			price: 5000,
			isRegistrationOpen: true,
			isPublic: true,
			startDate: new Date(new Date().setDate(new Date().getDate() - 5)),
			endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
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
			startDate: new Date('2023-08-1'),
			endDate: new Date('2023-08-7'),
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
	console.log('Seed data inserted successfully');
};

main()
	.catch(e => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
