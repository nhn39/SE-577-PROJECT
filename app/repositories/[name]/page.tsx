import { Commit as CommitLayout } from "@/components";
import ListOfRepos from "@/components/ListOfRepos";
import { Commit, Repo } from "@/utils/type";
import { Repo as RepoProfile } from "../../../components";
import { notFound } from "next/navigation";

async function getRepo(name: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/repos/${name}`);
    if (res.status !== 200) return null;
    const repo: Repo = await res.json();
    return repo;
  } catch (err) {
    return null;
  }
}

async function getCommits(name: string): Promise<Commit[] | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/repos/${name}/commits`);
    if (res.status !== 200) return null;
    const commits: Commit[] = await res.json();
    return commits;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function Page({ params }: { params: { name: string } }) {
  const repoData = getRepo(params.name);
  const commitsData = getCommits(params.name);

  const [repo, commits] = await Promise.all([repoData, commitsData]);

  console.log(commits);

  if (!commits || !repo) notFound();
  return (
    <div className="flex items-start gap-4 lg:px-40 px-20 my-4">
      <RepoProfile repo={repo} />
      <div className="grow space-y-3">
        {commits.map((commit) => (
          <CommitLayout commit={commit} key={commit.sha} />
        ))}
      </div>
      {/* <pre>{JSON.stringify(commits[0], null, 2)}</pre> */}
    </div>
  );
}
