"use client";

import StickyCard from "@/components/StickyCard";
import React, { useCallback, useState } from "react";
import ReactFlow, { NodeChange, applyNodeChanges, Background } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "stickyNote",
    position: {
      x: 50,
      y: 50,
    },
    data: {},
  },
  {
    id: "2",
    type: "stickyNote",
    position: {
      x: 100,
      y: 100,
    },
    data: {},
  },
];

let defaultX = 100;

let defaultY = 100;

const nodeTypes = {
  stickyNote: StickyCard,
};

const Whiteboard = () => {
  const [nodes, setNodes] = useState(initialNodes);
  let add = 0;

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((prevNds) => applyNodeChanges(changes, prevNds));
      console.log(changes);
    },
    [setNodes]
  );

  const handleAddNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: String(nds.length + 1),
        type: "stickyNote",
        position: {
          x: (defaultX += add),
          y: (defaultY += add),
        },
        data: {},
      },
    ]);
    add += 10;
  };

  return (
    <div className="w-screen h-screen px-3 py-5">
      <button
        className="bg-orange-400 px-3 py-2 rounded-md"
        onClick={handleAddNode}
      >
        Add
      </button>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Whiteboard;
