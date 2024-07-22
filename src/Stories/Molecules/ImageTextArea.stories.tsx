import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import ImageTextArea, {ImagePosition} from '../../Components/Molecules/ImageTextArea';
import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import MyImage from "../../Components/Atoms/MyImage";

export default {
    title: 'Molecules/ImageTextArea',
    component: ImageTextArea,
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
    imagePosition: ImagePosition;
    imagePath: string;
}

export const Primary: Story = {
    args: {
        title: "Soy un título",
        text: "Soy un texto",
        imagePosition: ImagePosition.Left,
        imagePath: 'https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png'
    },
    render: (args: argsProps) =>
        (
            <ImageTextArea imagePosition={args.imagePosition} imagePath={args.imagePath}>
                <Title textColor={Color.TextPrimary} size={Size.Sm}>
                    {args.title}
                </Title>
                <TextBody type={TextType.Body} textColor={Color.TextPrimary}>
                    {args.text}
                </TextBody>
                <MyImage isVertical={false} imagePath={args.imagePath} isHorizontal/>
            </ImageTextArea>)

};