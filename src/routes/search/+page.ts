import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({  url }) => {
	const query = url.searchParams.get('q');
	if (query) {
		throw redirect(307, `/search/${query}`);
	}
};
