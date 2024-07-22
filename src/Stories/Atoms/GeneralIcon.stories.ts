import type {Meta, StoryObj} from '@storybook/react';
import Button, {ButtonType} from '../../Components/Atoms/Button'
import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/GeneralIcon',
    component: GeneralIcon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof GeneralIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size : Size.Sm,
        color: "#000000",
        type : IconType.ContactInstagram
    },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
