import { Repo } from "@/utils/type";
import Image from "next/image";

export default function Repo({ repo }: { repo: Repo }) {
  console.log(repo);
  return (
    <div className="shrink-0 bg-slate-900/50 p-2 rounded space-y-1.5 text-lg backdrop-blur sticky top-2 w-[350px]">
      <p>
        <b>Repo Name: </b>
        {repo.name}
      </p>
      <p>
        <b>Created By: </b>
        {repo.owner.login}
      </p>
      <p>
        <b>Created At: </b>
        {new Date(repo.created_at).toDateString()}
      </p>
      <p>
        <b>Last Pushed: </b>
        {new Date(repo.pushed_at).toDateString()}
      </p>
    </div>
  );
}
