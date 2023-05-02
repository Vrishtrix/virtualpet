import { auth, discordAuth } from '$lib/server/lucia';
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, url, locals }) => {
	const code = url.searchParams.get('code') as string;
	const state = url.searchParams.get('state') as string;

	const storedState = cookies.get('github_oauth_state');

	if (state !== storedState) throw new Response(null, { status: 401 });

	try {
		const { existingUser, providerUser, createUser } =
			await discordAuth.validateCallback(code);

		const getUser = async () => {
			if (existingUser) return existingUser;

			return await createUser({
				username: providerUser.username,
			});
		};

		const user = await getUser();
		const session = await auth.createSession(user.userId);

		locals.auth.setSession(session);
	} catch (e) {
		return new Response(null, {
			status: 500,
		});
	}

	throw redirect(302, '/');
};
