import { githubAuth } from '$lib/server/lucia';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies }) => {
	const [url, state] = await githubAuth.getAuthorizationUrl();

	cookies.set('github_oauth_state', state, {
		path: '/',
		maxAge: 60 * 60,
	});

	return new Response(null, {
		status: 302,
		headers: {
			location: url.toString(),
		},
	});
};
