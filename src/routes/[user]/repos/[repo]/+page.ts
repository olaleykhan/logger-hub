// src/routes/query/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type {GithubCommit  } from '$lib/types';

export const load: PageLoad = async ({ fetch, params }) => {
    const {user, repo} = params;
  const response = await fetch(`/api/users/${user}/repos/${repo}`)
    if (response.ok) {
        const repoDetails:GithubCommit[] = await response.json();
        return {
            repoDetails
        }
    }
    const errorJSON = await response.json();
    throw error(response.status, errorJSON.message);
};


