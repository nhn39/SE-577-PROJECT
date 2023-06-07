## Steps to setting up project

1. Create a .env.local file
2. Add Github Api key

```bash
NEXT_PUBLIC_GITHUB_API_KEY=KEY_GOES_HERE
```

3. Install dependicies

```bash
npm install
#or
yarn install
```

4. Run server

```bash
npm run dev
#or
yarn run dev
```

## List of all api urls

- [http://localhost:3000/api/user](http://localhost:3000/api/user) returns user profile.
- [http://localhost:3000/api/repos](http://localhost:3000/api/repos) returns all repositories for a user.
- [http://localhost:3000/api/repos/{name}](http://localhost:3000/api/repos/{name}) returns specificed repositoty.
- [http://localhost:3000/api/repos/{name}/commits](http://localhost:3000/api/repos/{name}/commits) returns commit history of a repository.
