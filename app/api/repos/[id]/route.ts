import { Repo } from "@/utils/type";
import { NextResponse } from "next/server";
import example from "../../../../data.json"

export async function GET(request: Request, {params} : {params: {id: number}}) {
    const repo = example.find(repo => repo.id == params.id)
    console.log(repo);
    if (!repo) return NextResponse.json({message: "Not found!"}, {status: 404})
    return NextResponse.json(repo);
    
}
