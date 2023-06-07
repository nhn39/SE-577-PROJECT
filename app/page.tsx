import Image from "next/image";
import { UserProfile } from "@/components";
import { User, Repo } from "@/utils/type";
import ListOfRepos from "@/components/ListOfRepos";

async function getUser() {
  try {
    const res = await fetch("http://localhost:3000/api/user");
    if (res.status !== 200) return null;
    const user: Promise<User> = res.json();
    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getRepos() {
  try {
    const res = await fetch("http://localhost:3000/api/repos");
    if (res.status !== 200) return null;
    const repos: Promise<Repo[]> = res.json();
    return repos;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function Home() {
  const userData = getUser();
  const reposData = getRepos();
  const [user, repos] = await Promise.all([userData, reposData]);
  return (
    <div className="flex flex-1 items-start lg:px-40 px-20 my-4">
      {user && <UserProfile user={user} />}
      {repos && <ListOfRepos repos={repos} />}
    </div>
  );
}
