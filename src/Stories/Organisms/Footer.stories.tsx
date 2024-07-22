import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Meta, StoryObj} from '@storybook/react';

import {Size} from "../../Enums/Size";

import Footer from '../../Components/Organisms/Footer';
import SiteMapLinks from '../../Components/Molecules/SiteMapLinks';
import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";
import Social from '../../Components/Molecules/Social';
import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";

export default {
    title: 'Organisms/Footer',
    component: Footer,
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

export const Primary: Story = {
    args: {
    },
    render: (args) =>
        (<Router>
            <Footer>              
                <SiteMapLinks >
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 1</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 2</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 3</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 4</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 5</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 6</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 7</GeneralLink>
                    <GeneralLink type={LinkType.General} isExternal={false} path='localhost:6006/'>Link 8</GeneralLink>
                </SiteMapLinks>
                <Social >
                    <GeneralIcon color='#FFFFFF' type={IconType.SocialInstagram} size={ Size.Md} url='localhost:6006/' isExternal/>
                    <GeneralIcon color='#FFFFFF' type={IconType.SocialTwitter} size={ Size.Md} url='localhost:6006/' isExternal/>
                    <GeneralIcon color='#FFFFFF' type={IconType.SocialFacebook} size={ Size.Md} url='localhost:6006/' isExternal/>
                    <GeneralIcon color='#FFFFFF' type={IconType.SocialYoutube} size={ Size.Md} url='localhost:6006/' isExternal/>
                </Social>
            </Footer>
        </Router>)

};