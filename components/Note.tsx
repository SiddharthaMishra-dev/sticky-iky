"use client";

import useAutosizeTextArea from "@/hooks/useTextarea";
import { Trash } from "lucide-react";

import React, { ChangeEvent, useEffect, useRef } from "react";
import { NodeProps } from "reactflow";

type Props = {
  id: string;
  deleteNode: (id: string) => void;
  titleChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  contentChange: (e: ChangeEvent<HTMLTextAreaElement>, id: string) => void;
  title: string;
  content: string;
  color: string;
  date: Date;
};

const Note = (props: NodeProps<Props>) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [height, setHeight] = React.useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    titleRef?.current?.focus();
  }, [titleRef]);

  useAutosizeTextArea(textareaRef.current, props.data.content);
  useEffect(() => {
    if (textareaRef) {
      setHeight(textareaRef.current!.scrollHeight);
    }
  }, [textareaRef, props.data.content]);

  return (
    <>
      <div
        className={`h-full max-h-[${height + 168}px] rounded-xl group ${
          props.selected ? "ring-orange-400 ring-2" : ""
        }`}
        style={{ backgroundColor: props.data.color }}
        onClick={() => {}}
      >
        <div className="border-b border-gray-200 px-6 py-4 h-16">
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
            ref={textareaRef}
            rows={6}
            className="w-full resize-none bg-transparent outline-none placeholder:text-gray-600 focus:outline-1"
            placeholder="Description"
            value={props.data.content}
            onChange={(e) => props.data.contentChange(e, props.data.id)}
          />
        </div>
        <div className="p-4 flex justify-between items-center h-16">
          <button
            onClick={() => props.data.deleteNode(props.data.id)}
            className="backdrop-brightness-90 px-2 py-2 rounded-full"
          >
            <Trash className="w-5 h-5 " />
          </button>
          <span>{props.data.date.toDateString()}</span>
        </div>
      </div>
    </>
  );
};

export default React.memo(Note);
