import { Commit } from "@/utils/type";
import Image from "next/image";
import { GrValidate } from "react-icons/gr";
import { FcCancel } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Commit({ commit }: { commit: Commit }) {
  return (
    <div className="bg-slate-900/50 text-white p-2 flex items-start gap-8 grow rounded">
      <div className="flex items-center gap-2 shrink-0">
        <Image
          src={commit.committer.avatar_url}
          width={70}
          height={70}
          alt="image"
          className="rounded-full object-cover"
        />
        <p className="font-bold text-lg">{commit.commit.committer.name}</p>
      </div>
      <div className="grow bg-slate-900 p-2 mt-12 rounded space-y-1.5">
        <p>
          <b>SHA: </b>
          {commit.sha}
        </p>
        <p>
          <b>Date: </b>
          {new Date(commit.commit.committer.date).toDateString()}
        </p>
        <p>
          <b>Commit Message: </b>
          {commit.commit.message}
        </p>
        <p className="flex items-center space-x-2">
          <b>Verified:</b>
          {commit.commit.verification.verified ? (
            <AiFillCheckCircle fontSize={28} className="text-green-600" />
          ) : (
            <FcCancel fontSize={30} />
          )}
        </p>
      </div>
    </div>
  );
}
