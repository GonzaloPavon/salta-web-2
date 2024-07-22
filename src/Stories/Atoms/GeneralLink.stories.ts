import type {Meta, StoryObj} from '@storybook/react';
import Button, {ButtonType} from '../../Components/Atoms/Button'
import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";
import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";
import {withRouter} from "storybook-addon-react-router-v6";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/GeneralLink',
    component: GeneralLink,
    decorators: [withRouter],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof GeneralLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "imALink",
        path: "/",
        isExternal: false,
        type: LinkType.General
    },
};
