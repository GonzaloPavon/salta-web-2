import { BrowserRouter as Router } from 'react-router-dom';
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import ContactItemList from '../../Components/Organisms/ContactItemList';
import ContactItem from '../../Components/Molecules/ContactItem';
import Title from '../../Components/Atoms/Title';
import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";
import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";

export default {
    title: 'Organisms/ContactItemList',
    component: ContactItemList,
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
    title: string;
    LinkOneText: string;
    LinkTwoText: string;
    LinkThreeText: string;
    LinkOnePath: string;
    LinkTwoPath: string;
    LinkThreePath: string;
}

export const Primary: Story = {
    args: {
        title: "Soy un título",
        LinkOneText: "Link 1",
        LinkTwoText: "Link 2",
        LinkThreeText: "Link 3",
        LinkOnePath: 'http://localhost:6006/',
        LinkTwoPath: 'http://localhost:6006/',
        LinkThreePath: 'http://localhost:6006/'
    },
    render: (args: argsProps) =>
        (
            <Router>
                <ContactItemList>
                    <Title textColor={Color.BrandWhite} size={Size.Sm}>
                        {args.title}
                    </Title>
                    <ContactItem >
                        <GeneralIcon type={IconType.ContactPhone} isExternal url={'args.url'} color='#FFFFFF'/>
                        <GeneralLink type={LinkType.Social} isExternal path={'args.url'}>{args.LinkOneText}</GeneralLink>
                    </ContactItem>
                    <ContactItem >
                        <GeneralIcon type={IconType.ContactInstagram} isExternal url={'args.url'} color='#FFFFFF'/>
                        <GeneralLink type={LinkType.Social} isExternal path={'args.url'}>{args.LinkTwoText}</GeneralLink>
                    </ContactItem>
                    <ContactItem >
                        <GeneralIcon type={IconType.ContactLocation} isExternal url={'args.url'} color='#FFFFFF'/>
                        <GeneralLink type={LinkType.Social} isExternal path={'args.url'}>{args.LinkThreeText}</GeneralLink>
                    </ContactItem>
                </ContactItemList>
            </Router>)

};