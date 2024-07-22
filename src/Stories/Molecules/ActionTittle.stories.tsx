import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import ActionTittle from '../../Components/Molecules/ActionTittle';
import Title from '../../Components/Atoms/Title';
import Subtitle from '../../Components/Atoms/Subtitle';
import Button, {ButtonType} from "../../Components/Atoms/Button";

export default {
    title: 'Molecules/ActionTittle',
    component: ActionTittle,
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
    buttonText: string;
    buttonPath: string;
    isExternal: boolean,
}

export const Primary: Story = {
    args: {
        subtitle: "Soy un subtítulo",
        title: "Soy un título",
        buttonText: "Soy un boton",
        buttonPath: 'localhost:6006/',
        isExternal: true
    },
    render: (args: argsProps) =>
        (
            <ActionTittle>
                <Subtitle textColor={Color.BrandWhite}>
                    {args.subtitle}
                </Subtitle>
                <Title textColor={Color.BrandWhite} size={Size.Xl}>
                    {args.title}
                </Title>
                <Button path={args.buttonPath} onClickFunction={() => console.log('function')}
                        type={ButtonType.Secondary} isExternal={args.isExternal}
                        className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                    {args.buttonText}
                </Button>
            </ActionTittle>)

};