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

## Build for Docker

1. Run the following command to build a docker container. N.B Docker must be installed in order to build a docker container

```bash
docker build .
```

## the SPA has homepage that shows user github profile, repos, and show commit information of any specific repo.
