// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// TODO: configure page options before building
// export const prerender = 'auto';

// URI:  https://avatars.githubusercontent.com/u/53246916?v=4

import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	redirect(307, `/search`);
};
