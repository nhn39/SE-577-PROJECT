import { User } from "../utils/type";
import Image from "next/image";

export default function UserProfile({ user }: { user: User }) {
  return (
    <div className="w-fit p-8 space-y-4 grow-0 sticky top-5">
      <Image
        src={user.avatar_url}
        alt="user"
        width={360}
        height={360}
        className="rounded-full object-contain"
      />
      <div className="text-xl space-y-2">
        <p>Username: {user.login}</p>
        <p>Name: {user.name}</p>
        <p>Public Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
    </div>
  );
}
