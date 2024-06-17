"use client";

import { Trash } from "lucide-react";

import React, { useEffect, useRef } from "react";
import { NodeProps } from "reactflow";

type Props = {
  id: string;
  deleteNode: (id: string) => void;
  titleChange: (e: any, id: string) => void;
  contentChange: (e: any, id: string) => void;
  title: string;
  content: string;
  color: string;
  date: Date;
};

const Note = (props: NodeProps<Props>) => {
  const titleRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    titleRef?.current?.focus();
  }, [titleRef]);

  return (
    <div
      className={`w-[300px] rounded-xl group ${props.selected ? "ring-orange-400 ring-2" : ""}`}
      style={{ backgroundColor: props.data.color }}
      onClick={() => {}}
    >
      <div className="border-b border-gray-200 px-6 py-4">
        <input
          ref={titleRef}
          className="text-2xl font-semibold w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:font-semibold"
          placeholder="Title"
          value={props.data.title}
          onChange={(e) => props.data.titleChange(e, props.data.id)}
        />
      </div>
      <div className="px-6 py-4">
        <textarea
          rows={6}
          className="w-full resize-none bg-transparent outline-none placeholder:text-gray-600 focus:outline-1"
          placeholder="Description"
          value={props.data.content}
          onChange={(e) => props.data.contentChange(e, props.data.id)}
        />
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button onClick={() => props.data.deleteNode(props.data.id)}>
          <Trash className="text-gray-500 opacity-0 group-hover:opacity-100 bg-white/40 transition p-1  rounded-full " />
        </button>
        <span>{props.data.date.toDateString()}</span>
      </div>
    </div>
  );
};

export default React.memo(Note);
