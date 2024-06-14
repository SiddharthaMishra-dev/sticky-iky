"use client";

import { Trash } from "lucide-react";
import React, { useEffect, useRef } from "react";

type Props = {
  data: {
    id: string;
    deleteNode: (id: string) => void;
    titleChange: (e: any, id: string) => void;
    contentChange: (e: any, id: string) => void;
    title: string;
    content: string;
    color: string;
    date: Date;
  };
};

const Note = ({ data }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    titleRef?.current?.focus();
  }, [titleRef]);

  return (
    <div
      className={`w-[300px] rounded-xl group`}
      style={{ backgroundColor: data.color }}
      onClick={() => {}}
      ref={cardRef}
    >
      <div className="border-b border-orange-200 px-6 py-4">
        <input
          ref={titleRef}
          className="text-2xl font-semibold w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:font-semibold"
          placeholder="Title"
          value={data.title}
          onChange={(e) => data.titleChange(e, data.id)}
        />
      </div>
      <div className="px-6 py-4">
        <textarea
          rows={6}
          className="w-full resize-none bg-transparent outline-none placeholder:text-gray-600 focus:outline-1"
          placeholder="Description"
          value={data.content}
          onChange={(e) => data.contentChange(e, data.id)}
        />
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button onClick={() => data.deleteNode(data.id)}>
          <Trash className="text-gray-500 opacity-0 group-hover:opacity-100 bg-white/40 transition p-1  rounded-full " />
        </button>
        <span>{data.date.toDateString()}</span>
      </div>
    </div>
  );
};

export default React.memo(Note);
