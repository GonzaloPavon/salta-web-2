import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Meta, StoryObj} from '@storybook/react';

import SiteMapLinks from '../../Components/Molecules/SiteMapLinks';

import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";

export default {
    title: 'Molecules/SiteMapLinks',
    component: SiteMapLinks,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
} as Meta;

type Story = StoryObj;

interface argsProps {
    firstLinkUrl: string,
    secondLinkUrl: string,
    thirdLinkUrl: string,
    fourthLinkUrl: string,
    fifthLinkUrl: string,
    sixthLinkUrl: string,
    seventhLinkUrl: string,
    eighthLinkUrl: string,
}
export const Primary: Story = {
    args: {
        firstLinkUrl: "https://www.google.com/",
        secondLinkUrl: "https://www.google.com/",
        thirdLinkUrl: "https://www.google.com/",
        fourthLinkUrl: "https://www.google.com/",
        fifthLinkUrl: "https://www.google.com/",
        sixthLinkUrl: "https://www.google.com/",
        seventhLinkUrl: "https://www.google.com/",
        eighthLinkUrl: "https://www.google.com/",
    },
    render: (args :argsProps) =>
        (
        <Router>
            <SiteMapLinks >
                <GeneralLink type={LinkType.General} isExternal={false} path={args.firstLinkUrl}>Link 1</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.secondLinkUrl}>Link 2</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.thirdLinkUrl}>Link 3</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.fourthLinkUrl}>Link 4</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.fifthLinkUrl}>Link 5</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.sixthLinkUrl}>Link 6</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.seventhLinkUrl}>Link 7</GeneralLink>
                <GeneralLink type={LinkType.General} isExternal={false} path={args.eighthLinkUrl}>Link 8</GeneralLink>
            </SiteMapLinks>
        </Router>
)

};