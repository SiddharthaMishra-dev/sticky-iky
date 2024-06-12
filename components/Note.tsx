"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  data: {
    id: string;
    titleChange: (e: any, id: string) => void;
    contentChange: (e: any, id: string) => void;
    title: string;
    content: string;
    color: string;
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
      className={`w-[300px] rounded-xl`}
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
    </div>
  );
};

export default React.memo(Note);
