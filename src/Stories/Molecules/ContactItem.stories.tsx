import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Meta, StoryObj} from '@storybook/react';

import ContactItem from '../../Components/Molecules/ContactItem';

import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";
import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";

export default {
    title: 'Molecules/ContactItem',
    component: ContactItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
argTypes: {
    iconType: {
        options: [IconType.ContactInstagram, IconType.ContactPhone, IconType.ContactLocation],
        control: { type: 'radio' },
      },
},
} as Meta;

type Story = StoryObj;

interface argsProps {
    iconType: IconType,
    isExternal: boolean,
    url: string,
    iconColor: string,

}
export const Primary: Story = {
    args: {
        iconType: IconType.ContactInstagram,
        isExternal: true,
        url: "https://www.google.com/",
        iconColor: '#FFFFFF',
    },
    render: (args :argsProps) =>
        (
        <Router>
            <ContactItem >
                <GeneralIcon type={args.iconType} isExternal={args.isExternal} url={args.url} color={args.iconColor}/>
                <GeneralLink type={LinkType.Social} isExternal={args.isExternal} path={args.url}>Link 1</GeneralLink>
            </ContactItem>
        </Router>
)

}; 