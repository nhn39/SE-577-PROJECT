import { Repo } from "@/utils/type";
import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  });
  try {
    const user = await octokit.request("GET /user");

    const repo = await octokit.request(
      `GET /repos/${user.data.login}/${params.name}`
    );
    return NextResponse.json(repo.data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
