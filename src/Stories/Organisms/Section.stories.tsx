import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import Section, {Position}  from '../../Components/Organisms/Section';

export default {
    title: 'Organisms/Section',
    component: Section,
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
    imagePath : string;
    height : number;
    align: Position;
    className: string;
    classNameChildren: string;
    withPaddings: boolean;
}

export const Primary: Story = {
    args: {
        imagePath : "/images/Backgrounds/Home.jpg",
        height : 50,
        align: Position.Center,
        className:'',
        classNameChildren:'',
        withPaddings: false
    },
    render: (args: argsProps) =>
        (
            <Section    height={args.height} align={args.align} imagePath={args.imagePath} withPaddings={args.withPaddings} className={args.className}>
                <div>Contenido no imagen</div>
                <img src="/images/BottomImages/BottomCurved1.png" className='w-full absolute bottom-0 z-[2]'/>
            </Section>)

};