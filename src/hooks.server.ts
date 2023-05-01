import { renderIntoHTML } from '@master/css';
import config from './master.css';

import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	return await resolve(event, {
		transformPageChunk: ({ html }) => renderIntoHTML(html, config),
	});
};
