// src/routes/query/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import type { GithubUserDetails } from '$lib/types/user';

export const load: PageLoad = async ({ params, fetch }) => {
	const query = params.user;

	const response = await fetch('/api/users/' + query);
	console.log(response, 'response');

	if(response.ok) {
		const data:GithubUserDetails = await response.json();
		console.log(data, 'data');
		return {
			status: response.status,
			user: data
		};
	}

	const errorJSON = await response.json();
    throw error(response.status, errorJSON.message);


};