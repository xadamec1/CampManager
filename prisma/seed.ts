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
			createdAt: 'new Date()',
			title: 'Welcome to the camp!',
			content: 'This is the first post of the camp.',
			imagePath: '/camping_fun_h.webp'
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
