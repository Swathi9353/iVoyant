import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

const features = [
  { id: "text", label: "Text Field", type: "text" },
  { id: "number", label: "Number Field", type: "number" },
  { id: "email", label: "Email Field", type: "email" },
  { id: "checkbox", label: "Checkbox Group", type: "checkbox" },
  { id: "button", label: "Submit Button", type: "button" },
  { id: "date", label: "Date Field", type: "date" },
  {
    id: "dropdown",
    label: "Select Field",
    type: "select",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  { id: "file", label: "File Upload", type: "file" },
  { id: "header", label: "Header", type: "header" },
  {
    id: "radio",
    label: "Radio Group",
    type: "radio",
    options: ["Option A", "Option B", "Option C"],
  },
];

const DraggableItem = ({ feature }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: feature.id,
    data: feature,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none",
    padding: "10px",
    margin: "5px 0",
    background: "#f0f0f0",
    border: "1px solid #ccc",
    cursor: "grab",
    width: "100%",
    textAlign: "center",
    borderRadius: "5px",
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {feature.label}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        padding: "10px",
        background: "#f8f8f8",
        borderRight: "2px solid #ccc",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Form Elements
      </h3>
      {features.map((feature) => (
        <DraggableItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

const DropArea = ({ droppedItems }) => {
  const { isOver, setNodeRef } = useDroppable({ id: "drop-area" });

  return (
    <div
      ref={setNodeRef}
      style={{
        flex: 1,
        minHeight: "400px",
        border: "2px dashed #000",
        background: isOver ? "#f0f8ff" : "#fff",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {droppedItems.length === 0 ? (
        <p style={{ color: "#888" }}>
          Drag a field from the right to this area
        </p>
      ) : (
        droppedItems.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              background: "#e0e0e0",
              margin: "5px",
              borderRadius: "5px",
              minWidth: "100px",
              textAlign: "center",
            }}
          >
            {item.type === "button" ? (
              <button style={{ padding: "5px 10px", cursor: "pointer" }}>
                {item.label}
              </button>
            ) : item.type === "checkbox" ? (
              <label>
                <input type="checkbox" /> {item.label}
              </label>
            ) : item.type === "select" ? (
              <select style={{ padding: "5px", width: "100%" }}>
                {item.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : item.type === "file" ? (
              <input type="file" style={{ padding: "5px" }} />
            ) : item.type === "header" ? (
              <h3 style={{ margin: "5px 0" }}>{item.label}</h3>
            ) : item.type === "radio" ? (
              <div>
                {item.options.map((option, index) => (
                  <label key={index} style={{ display: "block" }}>
                    <input type="radio" name={item.id} value={option} />{" "}
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <input
                type={item.type}
                placeholder={item.label}
                style={{ padding: "5px", width: "100%" }}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

const FormBuilder = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over && over.id === "drop-area") {
      setDroppedItems((prev) => [...prev, active.data.current]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <DropArea droppedItems={droppedItems} />
      </div>
    </DndContext>
  );
};

export default FormBuilder;
