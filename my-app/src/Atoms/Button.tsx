import React from 'react';
import { Button, Flex } from 'antd';

const Buttons: React.FC = () => {
  return (
      
      <Flex style={{ width: "100%", flexDirection: "column", gap: "10px", alignItems: "center"}}>
        <Button style ={{ width: "50%"}} type="primary" block> Submit</Button>
        <Button style={{ width: "50%"}} type="primary" block> Input Field</Button>
        <Button style={{ width: "50%" }} type="primary" block> Email</Button>
        <Button style ={{ width: "50%" }} type="primary" block> Phone number</Button>
        <Button  style ={{ width: "50%" }} type="primary" block> File Upload</Button>
        <Button style={{ width: "50%" }} type="primary" block> Date</Button>
        <Button style ={{ width: "50%" }} type="primary" block> Dropdown</Button>
        <Button style ={{ width: "50%" }} type="primary" block> Radio Button</Button>
        <Button  style ={{ width: "50%" }} type="primary" block> Checkbox</Button>
        <Button style ={{ width: "50%" }} type="primary" block> Textarea</Button>
        <Button style={{ width: "50%" }} type="primary" block> Range Picker</Button>
      </Flex>
    );
};

export default Buttons;