import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

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
