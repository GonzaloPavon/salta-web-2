import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import TimeLineCard from '../../Components/Molecules/TimeLineCard';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
export default {
    title: 'Molecules/TimeLineCard',
    component: TimeLineCard,
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
    text: string;
    year: number;
}
export const Primary: Story = {
    args: {
        year: 2023,
        text: "Soy un texto" 
    },
    render: (args :argsProps) =>
        (
        <TimeLineCard year={args.year}>
            <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                {args.text}
            </TextBody>
        </TimeLineCard>)

};