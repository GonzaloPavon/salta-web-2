import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import DrivingResponsibilityCard from '../../Components/Molecules/DrivingResponsibilityCard';

import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import Subtitle from "../../Components/Atoms/Subtitle";

export default {
    title: 'Molecules/DrivingResponsibilityCard',
    component: DrivingResponsibilityCard,
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
        title: "Soy un título",
        text: "Soy un texto",
        subtitle: "Soy un subtítulo",
    },
    render: (args) =>
        (
        <DrivingResponsibilityCard>
            <Title textColor={Color.BrandWhite} size={Size.Sm}>
                {args.title}
            </Title>
            <TextBody type={TextType.Body} textColor={Color.BrandWhite} className="mt-3">
                {args.text}
            </TextBody>
            <Subtitle textColor={Color.BrandWhite} className="mb-4">
                {args.subtitle}
            </Subtitle>
        </DrivingResponsibilityCard>)

};