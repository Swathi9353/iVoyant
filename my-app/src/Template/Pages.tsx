import React, { useState } from "react";
import { Layout, Flex } from "antd";
import { DndContext, useDroppable } from "@dnd-kit/core";
import {
  layoutStyle,
  headerStyle,
  siderStyle,
  contentStyle,
  footerStyle,
} from "../Atoms/Layout";
import Buttons from "../Atoms/Button";

const { Header, Footer, Sider, Content } = Layout;

const Pages: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  // Make Content Area Droppable
  const { isOver, setNodeRef } = useDroppable({ id: "dropzone" });

  // Handle Drag End
  const handleDragEnd = (event: any) => {
    if (event.over && event.over.id === "dropzone") {
      setDroppedItems((prev) => [...prev, event.active.id]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Header style={headerStyle}>Form Builder</Header>
            <Layout>
              {/* Sidebar */}
              <Sider width="25%" style={siderStyle}>
                Form Components
                <Buttons />
              </Sider>

              {/* Main Content Area (Droppable Zone) */}
              <Content
                ref={setNodeRef}
                style={{
                  ...contentStyle,
                  border: "2px dashed #ccc",
                  backgroundColor: isOver ? "#e6f7ff" : "#fff",
                  padding: "20px",
                  textAlign: "center",
                  minHeight: "700px",
                }}
              >
                {droppedItems.length === 0
                  ? "Drag the components here"
                  : droppedItems.map((item, index) => (
                      <div
                        key={index}
                        
                      >
                        {item}
                      </div>
                    ))}
              </Content>
            </Layout>
            <Footer style={footerStyle}>@copyright 2025</Footer>
          </Layout>
        </Flex>
      </div>
    </DndContext>
  );
};

export default Pages;
