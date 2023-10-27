import React from "react";
import type {StoryObj, Meta}
from "@storybook/react";

import {ThemeProvider} from "../../../theme/context";
import {Box} from "./box";

const meta = {
  title: "Box",
  component: Box
} as Meta < typeof Box >;

export default meta;

type Story = StoryObj < typeof meta >;

export const Default: Story = {
  render: () => {
    return (<ThemeProvider><Box styles={
        {
          height: "20px",
          width: "20px"
        }
      } className="w-5 h-5"/></ThemeProvider>);
  }
};

export const Grid: Story = {
  render: () => {
    return (
      <ThemeProvider>
        <Box rows={6} cols={12} styles={
          {
            height: "300px",
            width: "600px",
          }
        } className="w-80 h-64">
          <Box rowStart={2} rowEnd={4} colStart={2} colEnd={4}/>
        </Box>
      </ThemeProvider>
    );
  }
};
