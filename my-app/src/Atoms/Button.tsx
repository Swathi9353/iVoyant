import React from 'react';
import { Button, Flex } from 'antd';

const Buttons: React.FC = () => {
    return (
      <Flex  style={{ width: "100%",flexDirection: "column" , gap: "10px", alignItems: "center",}}>
        <Button type="primary" block> Submit</Button>
        <Button type="primary" block> Input Field</Button>
        <Button type="primary" block> Email</Button>
        <Button type="primary" block> Phone number</Button>
        <Button type="primary" block> File Upload</Button>
        <Button type="primary" block> Date</Button>
        <Button type="primary" block> Dropdown</Button>
        <Button type="primary" block> Radio Button</Button>
        <Button type="primary" block> Checkbox</Button>
        <Button type="primary" block> Textarea</Button>
      </Flex>
    );
};

export default Buttons;