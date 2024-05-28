export type GithubUser = {
id: number;
login: string;
avatar_url: string;
type: string;
url: string;
}

export type GithubUserDetails = GithubUser & {
name: string;
company: string;
location: string;
email?: string;
bio?: string;
public_repos: number;
followers: number;
following: number;
html_url: string;
created_at: string;
updated_at: string;
}

export type GithubUserSearch = {
    total_count: number;
    incomplete_results: boolean;
    items: GithubUser[];
    }