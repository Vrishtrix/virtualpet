import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';

import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	if (!user) {
		throw redirect(302, '/');
	}

	const petdata = await prisma.pet.findUnique({
		where: {
			ownerId: user.userId,
		},
		select: {
			id: true,
			name: true,
			health: true,
			hunger: true,
			happiness: true,
			age: true,
		},
	});

	return {
		user,
		petdata,
	};
};

export const actions: Actions = {
	createpet: async ({ request, locals }) => {
		const { user } = await locals.auth.validateUser();

		const data = await request.formData();

		const pet_name = data.get('pet_name') as string;

		if (!pet_name) {
			return {
				error: 'Please enter a pet name',
			};
		}

		await prisma.pet.create({
			data: {
				name: pet_name,
				ownerId: user.userId,
			},
		});

		return {
			success: true,
		};
	},
};
