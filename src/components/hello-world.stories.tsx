import React from "react";
import HelloWorld from "./hello-world";
import type { StoryObj, Meta } from "@storybook/react";

const meta = {
  title: "HelloWorld",
  component: HelloWorld,
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HelloWorld />,
};
