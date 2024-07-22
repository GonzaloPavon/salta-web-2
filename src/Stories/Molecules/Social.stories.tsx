import React from 'react';
import {Size} from "../../Enums/Size";
import {Meta, StoryObj} from '@storybook/react';

import Social from '../../Components/Molecules/Social';

import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";

export default {
    title: 'Molecules/Social',
    component: Social,
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
    iconSizes: Size;
    urlInstagram: string,
    urlTwitter: string,
    urlFacebook: string,
    urlYoutube: string
}
export const Primary: Story = {
    args: {
        iconSizes: Size.Md,
        urlInstagram: "https://www.instagram.com/",
        urlTwitter: "https://twitter.com/",
        urlFacebook: "https://www.facebook.com/",
        urlYoutube: "https://www.youtube.com/"
    },
    render: (args :argsProps) =>
        (
        <Social >
            <GeneralIcon color='#FFFFFF' type={IconType.SocialInstagram} size={args.iconSizes} url={args.urlInstagram} isExternal/>
            <GeneralIcon color='#FFFFFF' type={IconType.SocialTwitter} size={args.iconSizes} url={args.urlTwitter} isExternal/>
            <GeneralIcon color='#FFFFFF' type={IconType.SocialFacebook} size={args.iconSizes} url={args.urlFacebook} isExternal/>
            <GeneralIcon color='#FFFFFF' type={IconType.SocialYoutube} size={args.iconSizes} url={args.urlYoutube} isExternal/>
        </Social>)

};