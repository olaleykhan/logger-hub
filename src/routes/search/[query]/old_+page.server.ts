// import { error } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';


// export const load: PageServerLoad = async ({fetch, params }) => {
//     // console.log("data of search query", url, "ENDDDD-----");
// 	const response = await fetch(`https://api.github.com/search/users?q=${params.query} in:login`);
// 	if (response.ok) {
//         // console.log("response", response, "DATA SUVCESS");
//         const data = await response.json();
//         console.log("data", data, "DATA SUVCESS");
// 		return data;
// 	}
// 	const errorJSON = await response.json();
//     console.log("errorJSON", errorJSON);
// 	throw error(response.status, errorJSON.message);
// };
