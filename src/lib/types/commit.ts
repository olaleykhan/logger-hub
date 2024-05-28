export type GithubCommit = {
    url : string;
    author:{
        avatar_url: string;
        login: string;
        html_url?: string;
    },
    commit:{
        message: string;
        author:{
            name?: string;
            email?: string;
            date: string;
        }
    }


}