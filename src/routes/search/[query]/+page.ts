// src/routes/query/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { GithubUserSearch } from '$lib/types/user';

export const load: PageLoad = async ({ fetch, params, url }) => {
    const query = params.query;
    const page = parseInt(url.searchParams.get('page') || '1');
    const sort = url.searchParams.get('sort') || 'login';
    const order = url.searchParams.get('order') || 'asc';
    const response = await fetch(`https://api.github.com/search/users?q=${query} in:login&per_page=9&page=${page}&sort=${sort}&order=${order}`);
    
    if (response.ok) {
        const data: GithubUserSearch = await response.json();
        return { items: data.items, total_count: data.total_count, currentPage: page, sort, order };
    }

    const errorJSON = await response.json();
    throw error(response.status, errorJSON.message);
};
