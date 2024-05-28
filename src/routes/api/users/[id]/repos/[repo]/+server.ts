import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { octokit } from '$utils/octokit';

export const GET: RequestHandler = async ({ params }) => {
	const { id,repo } = params;

    try {
        const response = await octokit.request('GET /repos/{username}/{repo}/commits/', {
            username: id,
            repo: repo
        });


        return json(response.data);
    } catch (err) {
        console.error('Error fetching user data:', err);
        return error(500, 'Failed to fetch user data');
    }
};
