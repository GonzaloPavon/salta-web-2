import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import BeersListing from '../../Components/Organisms/BeersListing';

import BeerCard from '../../Components/Molecules/BeerCard';
import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";

export default {
    title: 'Organisms/BeersListing',
    component: BeersListing,
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
        <BeersListing>
            <BeerCard imagePath={'/images/Beers/rubia.png'}>
                <Title textColor={Color.TextPrimary} className="mb-2" size={Size.Sm}>
                    Titulo
                </Title>
                <TextBody type={TextType.Body} textColor={Color.TextPrimary}>
                    Texto
                </TextBody>
            </BeerCard>
            <BeerCard imagePath={'/images/Beers/negra.png'}>
                <Title textColor={Color.TextPrimary} className="mb-2" size={Size.Sm}>
                    Titulo
                </Title>
                <TextBody type={TextType.Body} textColor={Color.TextPrimary}>
                    Texto
                </TextBody>
            </BeerCard>
        </BeersListing>)

};