import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Size} from "../../Enums/Size";
import {Meta, StoryObj} from '@storybook/react';

import NavBar from '../../Components/Organisms/NavBar';
import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";
import DropDownNavLink from "../../Components/Atoms/DropDownNavLink";
import Button, {ButtonType} from "../../Components/Atoms/Button";

export default {
    title: 'Organisms/NavBar',
    component: NavBar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        iconSizes: {
            options: [Size.Sm, Size.Md],
            control: { type: 'radio' },
          },
    },
} as Meta;

type Story = StoryObj;

interface argsProps {
    linkTitle: string;
    logoPath: string;
}
export const Primary: Story = {
    args: {
        linkTitle: 'DropDownLink',
        logoPath: "/images/LogoSalta.png"
    },
    render: (args :argsProps) =>
        (
            <Router>
                <NavBar logoPath={args.logoPath}>
                    <GeneralLink type={LinkType.General} isExternal={false} path=''>Link 1</GeneralLink>
                    <DropDownNavLink linkTitle={args.linkTitle}>
                        <GeneralLink type={LinkType.General} isExternal={false} path=''>DropDownLink 1</GeneralLink>
                        <GeneralLink type={LinkType.General} isExternal={false} path=''>DropDownLink 2</GeneralLink>
                    </DropDownNavLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path=''>Link 3</GeneralLink>
                    <Button path='' onClickFunction={() => console.log('function')}
                            type={ButtonType.Secondary} isExternal
                            className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                        Boton
                    </Button>
                </NavBar>
            </Router>)

};