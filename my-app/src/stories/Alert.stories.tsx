
import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    message: "This is a success message!",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong! Please try again.",
    type: "error",
  },
};

export const Info: Story = {
  args: {
    message: "This is an informational message.",
    type: "info",
  },
};

export const Warning: Story = {
  args: {
    message: "Warning! Check this out.",
    type: "warning",
  },
};

export const WithCloseButton: Story = {
  args: {
    message: "This alert has a close button!",
    type: "info",
    onClose: () => alert("Alert closed!"),
  },
};
