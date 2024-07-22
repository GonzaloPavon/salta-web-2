import type {Meta, StoryObj} from '@storybook/react';
import Touple from '../../Components/Molecules/Touple'

const meta = {
    title: 'Molecules/Touple',
    component: Touple,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Touple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        touplekey: "Soy una clave",
        value: "Soy un valor",
    },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
