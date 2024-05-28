export type GithubRepo={
    name: string;
    archived: boolean;
    html_url: string;
    description: string;
    id: number;
    owner:{
        login: string;
        id: number;
    }
}