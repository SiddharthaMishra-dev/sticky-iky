"use client";

import StickyCard from "@/components/StickyCard";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  NodeChange,
  applyNodeChanges,
  Background,
  OnNodesChange,
  Node,
} from "reactflow";
import { initialNodes } from "@/utils/initialNodes";
import "reactflow/dist/style.css";

let defaultX = 100;

let defaultY = 100;

const nodeTypes = {
  stickyNote: StickyCard,
};

const Whiteboard = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  let add = 0;

  const onNodesChange: OnNodesChange = useCallback(
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
