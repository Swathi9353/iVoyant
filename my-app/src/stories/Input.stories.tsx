
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input"; 


const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};
