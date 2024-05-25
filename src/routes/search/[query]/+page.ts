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
        const limitedTotalCount = Math.min(data.total_count, 900); // Limit total count to 100 pages
        return { items: data.items, total_count: limitedTotalCount, currentPage: page, sort, order };
    }


    const errorJSON = await response.json();
    throw error(response.status, errorJSON.message);
};


