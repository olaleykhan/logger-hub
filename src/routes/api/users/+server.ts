import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch(`https://api.github.com/search/users?q=olaleykhan in:login`);

	if (response.ok) {
		const resJSON = await response.json();
        // console.log(resJSON, 'resJSON');
		return json(resJSON, {
			status: 200
		});
	}
	throw error(response.status, response.statusText);
};
