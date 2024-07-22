import type {Meta, StoryObj} from '@storybook/react';
import Button, {ButtonType} from '../../Components/Atoms/Button'
import MyImage from "../../Components/Atoms/MyImage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/MyImage',
    component: MyImage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof MyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isHorizontal: true,
        isVertical: false,
        imagePath: '/logo512.png'
    },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
