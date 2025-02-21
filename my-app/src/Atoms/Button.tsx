import React from "react";
import { Button, Flex } from "antd";

const Buttons: React.FC = () => {
  const data = [
    {
      id: 1,
      title: "Submit",
    },
    {
      id: 2,
      title: "Input Field",
    },
    {
      id: 3,
      title: "Email",
    },
    {
      id: 4,
      title: "Phone number",
    },
    {
      id: 5,
      title: "File Upload",
    },
    {
      id: 6,
      title: "Date",
    },
    {
      id: 7,      
      title: "Dropdown",  
    },
    {
      id: 8,
      title: "Radio Button",
    },
    {
      id: 9,
      title: "Checkbox",
    },
    {
      id: 10,
      title: "Textarea",
    },
    {
      id: 11,
      title: "Button",
    },
  ];
  data.map(( data) => console.log(data));
  return (
    <div>
      <Flex  style={{
        width: "100%",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
      >
        {data.map((data) => (
          <Button key={data.id}>{data.title}</Button>
        ))}
      </Flex>
    </div>
  );  
};
    
      


export default Buttons;
