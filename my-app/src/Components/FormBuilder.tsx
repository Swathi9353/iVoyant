import React, { useState } from "react";
import { DndContext, DragEndEvent, useDraggable, useDroppable } from "@dnd-kit/core";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";

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
interface Feature {
  id: string;
  label: string;
  type: string;
  options?: string[];
}
const DraggableItem = ({ feature}:{feature: Feature}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: feature.id,
    data: feature,
  });

  const swathi: React.CSSProperties = {
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
    <div ref={setNodeRef} {...listeners} {...attributes} style={swathi}>{feature.label}</div>
  );
};


const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        padding: "10px",
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

const DropArea = ({ droppedItems, setDroppedItems }:{droppedItems: Feature[], setDroppedItems: (itens: Feature[])=>void}) => {
  const { isOver, setNodeRef } = useDroppable({ id: "drop-area" });

  const handleDelete = (id: string) => {
    const newItems=droppedItems.filter((item) => item.id !== id);
    setDroppedItems(newItems);
  };

  const handleLabelChange = (id: string, newLabel: string) => {
    setDroppedItems(
      droppedItems.map((item) =>
        item.id === id ? { ...item, label: newLabel } : item
      )
    );
  };
  const [istruer,setistruer]= useState(false);

  const handleEdit = (id:string ) => {
    console.log('Editing item with ID:', id);
  setistruer(!istruer)
    
    
  }

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
              background: "#f0f0f0",
              margin: "5px",
              borderRadius: "6px",
              minWidth: "100px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {istruer?<input
              type="text"
              value={item.label}
              onChange={(e) => handleLabelChange(item.id, e.target.value)}
              style={{
                border: "none",
                textAlign: "center",
                fontWeight: "bold",
                width: "100%",
              }}
            />:<div style={{
                border: "none",
                textAlign: "center",
                width: "100%",
              }}>{ item.type}</div>}
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
                {item.options && item.options.map((option, index) => (
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
                {item.options && item.options.map((option, index) => (
                  <label key={index} style={{ display: "block" }}>
                    <input type="radio" name={item.id} value={option} />{" "}
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <input
                type={item.type}
                placeholder="enter text"
                style={{ padding: "5px", width: "100%"}}
              />
            )}

            <button
              onClick={() => handleDelete(item.id)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Trash2 size={18} color="red" />
            </button>
            <button
            onClick={() => handleEdit(item.id)}
              style={{
                position: "absolute",
                top: "5px",
                right: "30px", // Adjust position to not overlap delete
                background: "transparent",
                border: "1px solid ",
                cursor: "pointer",
              }}
            >
              <Pencil  size={10} color="blue" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};
interface DroppedItems {
  id: string;
  type: string;
  label: string;
  options?: string[];
}
const FormBuilder = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItems[]>([]);
  

  const handleDragEnd = (event:DragEndEvent) => {
    const { over, active } = event;
    if (over && over.id === "drop-area") {
      const newItem = { ...active.data.current, id: crypto.randomUUID(),type:'',label:'' }; // Generate unique ID
      setDroppedItems((prev) => [...prev, newItem]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <DropArea
          droppedItems={droppedItems}
          setDroppedItems={setDroppedItems}
        />
      </div>
    </DndContext>
  );
};

export default FormBuilder;
