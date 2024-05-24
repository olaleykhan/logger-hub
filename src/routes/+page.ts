// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// TODO: configure page options before building
// export const prerender = 'auto';

// URI:  https://avatars.githubusercontent.com/u/53246916?v=4


import type { PageLoad } from './$types';
export const load: PageLoad = ({ params }) => {
	return {
		post: {
			title: `Title for param goes here`,
			content: `Content for param goes here`
		}
	};
};

