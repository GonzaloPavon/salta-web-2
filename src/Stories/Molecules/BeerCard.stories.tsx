import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import BeerCard from '../../Components/Molecules/BeerCard';
import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";

export default {
    title: 'Molecules/BeerCard',
    component: BeerCard,
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
    text: string;
    imagePath: string;
}
export const Primary: Story = {
    args: {
        title: "Soy un título",
        text: "Soy un texto",
        imagePath: "/images/Beers/rubia.png"
    },
    render: (args :argsProps) =>
        (
        <BeerCard imagePath={args.imagePath}>
            <Title textColor={Color.TextPrimary} className="mb-2" size={Size.Sm}>
                {args.title}
            </Title>
            <TextBody type={TextType.Body} textColor={Color.TextPrimary}>
                {args.text}
            </TextBody>
        </BeerCard>)

};