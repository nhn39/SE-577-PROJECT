import { Repo } from "@/utils/type";
import example from "../../../data.json"
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(example)
    
}