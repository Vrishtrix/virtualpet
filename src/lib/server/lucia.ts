import lucia from 'lucia-auth';
import { discord, github } from '@lucia-auth/oauth/providers';
import { sveltekit } from 'lucia-auth/middleware';
import prisma from '@lucia-auth/adapter-prisma';

import { PrismaClient } from '@prisma/client';

import { dev } from '$app/environment';
import {
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
	REDIRECT_URI,
} from '$env/static/private';

export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
});

export const githubAuth = github(auth, {
	clientId: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
});

export const discordAuth = discord(auth, {
	clientId: DISCORD_CLIENT_ID,
	clientSecret: DISCORD_CLIENT_SECRET,
	redirectUri: REDIRECT_URI,
});

export type Auth = typeof auth;
