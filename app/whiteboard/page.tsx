"use client";

import Note from "@/components/Note";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  NodeChange,
  applyNodeChanges,
  Background,
  OnNodesChange,
  Node,
  Controls,
  ReactFlowInstance,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { Plus } from "lucide-react";

let defaultX = 100;

let defaultY = 100;

const nodeTypes = {
  note: Note,
};

const Whiteboard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  let add = 0;

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem("flow", JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFn = async () => {
      const rawFlow = await JSON.parse(localStorage.getItem("flow") || "{}");
      const newFlow = rawFlow.nodes.map((node: Node) => {
        return {
          ...node,
          data: {
            ...node.data,
            titleChange: onTitleChange,
            contentChange: onContentChange,
          },
        };
      });
      if (newFlow) {
        setNodes(newFlow || []);
      }
    };
    restoreFn();
  }, [setNodes]);

  const onTitleChange = (e: any, id: string) => {
    setNodes((nds) => {
      const newNodes = nds.map((node) => {
        if (node.id !== id) return node;
        return {
          ...node,
          data: {
            ...node.data,
            title: e.target.value,
          },
        };
      });
      return newNodes;
    });
  };

  const onContentChange = (e: any, id: string) => {
    setNodes((nds) => {
      const newNodes = nds.map((node) => {
        if (node.id !== id) return node;
        return {
          ...node,
          data: {
            ...node.data,
            content: e.target.value,
          },
        };
      });
      return newNodes;
    });
  };

  const handleAddNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: String(nds.length + 1),
        type: "note",
        position: {
          x: (defaultX += add),
          y: (defaultY += add),
        },
        data: {
          titleChange: onTitleChange,
          contentChange: onContentChange,
          title: `Note ${nds.length + 1}`,
          content: `This is note ${nds.length + 1}`,
        },
      },
    ]);
    add += 20;
  };

  useEffect(() => {
    setNodes([
      {
        id: "1",
        type: "note",
        position: {
          x: 50,
          y: 50,
        },
        data: {
          id: "1",
          titleChange: onTitleChange,
          contentChange: onContentChange,
          title: "",
          content: "This is note 1",
        },
      },
      {
        id: "2",
        type: "note",
        position: {
          x: 100,
          y: 100,
        },
        data: {
          id: "2",
          titleChange: onTitleChange,
          contentChange: onContentChange,
          title: "",
          content: "This is note 2",
        },
      },
    ]);
  }, []);

  if (nodes.length === 0) {
    return <div>Loading...</div>; // Render a loading state while nodes are being set
  }
  return (
    <div className="w-screen h-screen px-3 py-5">
      <div className="w-[99%] h-[95%] ring-2 ring-orange-400 overflow-hidden rounded-lg mx-auto">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onInit={setRfInstance}
          className="relative"
        >
          <Background />
          <Controls />
          <button
            className="absolute bg-orange-400 hover:bg-orange-500 transition px-3 py-2 rounded-md top-4 left-4 z-10 flex justify-center items-center gap-x-3"
            onMouseDown={handleAddNode}
          >
            Add
            <Plus className="h-5 w-5 " />
          </button>

          <button
            className="absolute bg-orange-400 hover:bg-orange-500 transition px-3 py-2 rounded-md top-4 left-[200px] z-10 flex justify-center items-center gap-x-3"
            onMouseDown={onSave}
          >
            Save
            <Plus className="h-5 w-5 " />
          </button>

          <button
            className="absolute bg-orange-400 hover:bg-orange-500 transition px-3 py-2 rounded-md top-4 left-[400px] z-10 flex justify-center items-center gap-x-3"
            onMouseDown={onRestore}
          >
            Reload
            <Plus className="h-5 w-5 " />
          </button>
        </ReactFlow>
      </div>
    </div>
  );
};

export default Whiteboard;
