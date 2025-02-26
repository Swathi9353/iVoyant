import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableAreaProps {
  id: string;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ id }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  const dropStyle = {
    width: "100%",
    minHeight: "400px",
    border: "2px dashed #ccc",
    backgroundColor: isOver ? "#e6f7ff" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div ref={setNodeRef} style={dropStyle}>
      {droppedItems.length === 0
        ? "Drop components here"
        : droppedItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                margin: "5px",
                background: "#1677ff",
                color: "#fff",
              }}
            >
              {item}
            </div>
          ))}
    </div>
  );
};

export default DroppableArea;
