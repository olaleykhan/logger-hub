import { error } from '@sveltejs/kit';
import type { PageLoad, } from './$types';
import type { GithubUserSearch } from '$lib/types/user';


export const load: PageLoad = async ({fetch, params }) => {
    // console.log("data of search query", url, "ENDDDD-----");
	const response = await fetch(`https://api.github.com/search/users?q=${params.query} in:login`);
	if (response.ok) {
        // console.log("response", response, "DATA SUVCESS");
        const data:GithubUserSearch = await response.json();
        console.log("data", data, "DATA SUVCESS");
		return data;
	}
	const errorJSON = await response.json();
    console.log("errorJSON", errorJSON);
	throw error(response.status, errorJSON.message);
};
