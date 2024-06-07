"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const Note = ({ data }: { data: any }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [selected, isSelected] = useState<Boolean>(false);
  const handleOutsideClick = (event: any) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      isSelected(false);
    }
  };

  useEffect(() => {
    titleRef?.current?.focus();
  }, [titleRef]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [cardRef]);

  return (
    <div
      className={twMerge(
        `w-[300px] bg-orange-200 rounded-xl`,
        selected && `ring-2 ring-orange-400`
      )}
      onClick={() => isSelected(!selected)}
      ref={cardRef}
    >
      <div className="border-b border-orange-200 px-6 py-4">
        <input
          ref={titleRef}
          className="w-full bg-transparent outline-none placeholder:text-gray-700 placeholder:font-semibold"
          placeholder="Title"
          value={data.title}
          onChange={(e) => data.titleChange(e, data.id)}
        />
      </div>
      <div className="px-6 py-4">
        <textarea
          rows={6}
          className="w-full bg-transparent outline-none placeholder:text-gray-800"
          placeholder="Description"
          value={data.content}
          onChange={(e) => data.contentChange(e, data.id)}
        />
      </div>
    </div>
  );
};

export default React.memo(Note);
