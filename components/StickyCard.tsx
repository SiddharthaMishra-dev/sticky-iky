"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const StickyCard = () => {
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
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [cardRef]);

  return (
    <div
      className={twMerge(
        `w-[300px] bg-orange-300 rounded-xl`,
        selected && `ring-2 ring-orange-400`
      )}
      onClick={() => isSelected(!selected)}
      ref={cardRef}
    >
      <div className="border-b border-orange-200 px-6 py-4">
        <input
          ref={titleRef}
          className="w-full bg-transparent outline-none placeholder:text-gray-700"
          placeholder="Title"
        />
      </div>
      <div className="px-6 py-4">
        <p className="text-lg font-medium text-gray-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti repellat
          deleniti asperiores iusto explicabo doloribus odio mollitia adipisci natus.
        </p>
      </div>
    </div>
  );
};

export default StickyCard;
