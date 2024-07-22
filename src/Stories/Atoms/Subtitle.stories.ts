import type {Meta, StoryObj} from '@storybook/react';
import {Color} from "../../Enums/Color";
import Subtitle from "../../Components/Atoms/Subtitle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/Subtitle',
    component: Subtitle,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children : "ImASubtitle",
        textColor : Color.TextPrimary
    },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
