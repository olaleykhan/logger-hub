// src/routes/query/+page.ts
import { error } from '@sveltejs/kit';

import type { LayoutLoad } from './$types';

import type { GithubUserDetails, GithubRepo } from '$lib/types';

export const load: LayoutLoad = async ({ params, fetch }) => {
	const query = params.user;

	const response = await fetch('/api/users/' + query);
	const repoResponse = await fetch(`/api/users/${query}/repos`)
	console.log(response, 'response');

	if(response.ok) {
		const user:GithubUserDetails = await response.json();
		const repos:GithubRepo[] = await repoResponse.json();
		console.log(user, 'user');
		return {
			status: response.status,
			user,
			repos
		};
	}

	const errorJSON = await response.json();
    throw error(response.status, errorJSON.message);


};