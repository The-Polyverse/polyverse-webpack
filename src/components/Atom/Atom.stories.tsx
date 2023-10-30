import React from 'react';
import type {Meta, StoryFn, StoryObj} from '@storybook/react';

import {Atom} from './Atom';

// Learn how to write stories:
// https://web.docs.shopify.io/docs/guides/storybook/how-to-write-story-files
const meta = {
  component: Atom,
  parameters: {
    // Embedding Figma designs
    // The embed appears in the "Design" tab of the story
    // Learn more: https://pocka.github.io/storybook-addon-designs/?path=/docs/docs-figma-readme--page
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...?node-id=...',
    },
  },
} as Meta<typeof Atom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Atom>Atom</Atom>;
  },
};

export const Primary: Story = {
  render: () => {
    return <Atom primary>Atom</Atom>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <Atom secondary>Atom</Atom>;
  },
};

export const Button: Story = {
  render: () => {
    return <Atom type="button">Atom</Atom>;
  },
};

export const ButtonPrimary: Story = {
  render: () => {
    return <Atom type="button" primary>Atom</Atom>;
  },
};

export const ButtonSecondary: Story = {
  render: () => {
    return <Atom type="button" secondary>Atom</Atom>;
  },
};

export const Link: Story = {
  render: () => {
    return <Atom type="a" href="#">Atom</Atom>;
  },
};
