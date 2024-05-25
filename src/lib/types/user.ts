export type GithubUser = {
id: number;
login: string;
avatar_url: string;
type: string;
url: string;
}

export type GithubUserSearch = {
total_count: number;
incomplete_results: boolean;
items: GithubUser[];
}