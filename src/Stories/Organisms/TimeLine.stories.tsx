import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import TimeLine from '../../Components/Organisms/TimeLine';

import TimeLineCard from '../../Components/Molecules/TimeLineCard';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";

export default {
    title: 'Organisms/TimeLine',
    component: TimeLine,
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
        (
        <TimeLine>
            <TimeLineCard year={2023}>
                <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                    Soy un texto
                </TextBody>
            </TimeLineCard>
            <TimeLineCard year={2023}>
                <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                    Soy un texto
                </TextBody>
            </TimeLineCard>
            <TimeLineCard year={2023}>
                <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                    Soy un texto
                </TextBody>
            </TimeLineCard>
            <TimeLineCard year={2023}>
                <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                    Soy un texto
                </TextBody>
            </TimeLineCard>
        </TimeLine>)

};