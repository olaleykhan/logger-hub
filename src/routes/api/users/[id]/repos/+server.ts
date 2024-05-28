import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { octokit } from '$utils/octokit';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;

    try {
        const response = await octokit.request('GET /users/{username}/repos', {
            username: id
        });


        return json(response.data);
    } catch (err) {
        console.error('Error fetching user data:', err);
        return error(500, 'Failed to fetch user data');
    }
};
