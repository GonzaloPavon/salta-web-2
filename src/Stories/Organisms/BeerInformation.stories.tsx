import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import BeerInformation from '../../Components/Organisms/BeerInformation';
import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import Subtitle from "../../Components/Atoms/Subtitle";

export default {
    title: 'Organisms/BeerInformation',
    component: BeerInformation,
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
    subtitle: string;
    title: string;
    text: string;
    imagePath: string,
    toupleInfromation: object
}

export const Primary: Story = {
    args: {
        subtitle: "Soy un subtítulo",
        title: "Soy un título",
        text: 'Soy un texto',
        imagePath: '/images/Beers/rubiaBeerInformation.png',
        toupleInfromation:[
            {touplekey:'Amargor', value:'0 Ibu'},
            {touplekey:'Graduación alcohólica', value:'4,7% Vol.'},
            {touplekey:'Temperatura de servido', value:'3/4º'}
        ]
        

    },
    render: (args: argsProps) =>
        (
            <BeerInformation toupleInfromation={args.toupleInfromation} imagePath={args.imagePath}>
                <Title textColor={Color.TextPrimary} className="mb-4 md:mb-6 text-center md:text-left" size={Size.Xl}>
                    {args.title}
                </Title>
                <TextBody type={TextType.Hero} textColor={Color.TextPrimary} className="text-center md:text-left">
                    {args.text}
                </TextBody>
                <Subtitle textColor={Color.TextPrimary} className="mb-4 text-center md:text-left">
                    {args.subtitle}
                </Subtitle>
            </BeerInformation>)

};