import { Meta, StoryObj } from '@storybook/react'
import Header from './header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    logoSrc: { control: 'text' },
    logoAlt: { control: 'text' },
    logoUrl: { control: 'text' },
    logoSrText: { control: 'text' },
    linkLabel1: { control: 'text' },
    linkUrl1: { control: 'text' },
    linkLabel2: { control: 'text' },
    linkUrl2: { control: 'text' },
  },
};

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
