import { Octokit } from "octokit";


export const octokit = new Octokit({
    userAgent: 'octokit/rest.js v18.0.0',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
});