import { Repo } from "@/utils/type";
import Link from "next/link";

export default function ListOfRepos({ repos }: { repos: Repo[] }) {
  return (
    <div className="grow flex-1 mt-8">
      {repos.map((repo) => (
        <>
          <Repository repo={repo} />
        </>
      ))}
    </div>
  );
}

function Repository({ repo }: { repo: Repo }) {
  return (
    <Link href={`/repositories/${repo.name}`}>
      <div className="bg-slate-950/50 rounded p-2 px-4 w-full my-3">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">{repo.name}</p>
          <p className="bg-black/50 px-3 py-1 rounded-full capitalize text-gray-300">
            {repo.visibility}
          </p>
        </div>
        <p className="text-sm">{repo.description}</p>
        <p>
          <b>Clone at:</b> {repo.clone_url}
        </p>
        <p>
          <b>Created at:</b> {repo.created_at}
        </p>
      </div>
    </Link>
  );
}
