import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
  });
  try {
    const user = await octokit.request("/user");
    return NextResponse.json(user.data);
  } catch (err) {
    return NextResponse.json({ message: "not found!" }, { status: 404 });
  }
}
