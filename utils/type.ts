export interface Repo {
  id: number;
  name: string;
  visibility: string;
  created_at: string;
  description: string;
  clone_url: string;
}

export interface User {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  gists_url: string;
  public_repos: number;
  repos_url: string;
  bio: string;
  followers: number;
  following: number;
}

export interface Commit {
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  comments_url: string;
  commiter: {
    avatar_url: string;
  };
  verification: {
    verified: boolean;
    signature: string;
  };
}
