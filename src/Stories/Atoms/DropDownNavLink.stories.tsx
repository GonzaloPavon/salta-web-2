import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Meta, StoryObj} from '@storybook/react';

import DropDownNavLink from '../../Components/Atoms/DropDownNavLink';
import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";

export default {
    title: 'Atoms/DropDownNavLink',
    component: DropDownNavLink,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta;

type Story = StoryObj;

interface argsProps {
    linkTitle: string;
}

export const Primary: Story = {
    args: {
        linkTitle: "Soy un link",
    },
    render: (args: argsProps) =>
        (
            <Router>
                <DropDownNavLink linkTitle={args.linkTitle}>
                    <GeneralLink type={LinkType.General} isExternal={false} path='http://localhost:6006/'>Link 1</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='http://localhost:6006/'>Link 2</GeneralLink>
                </DropDownNavLink>
            </Router>)

};