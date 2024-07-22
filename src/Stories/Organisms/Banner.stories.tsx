import {ScreenSize} from "../../Enums/ScreenSize";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

import {useIsWindowSizeBellow} from "../../Helpers/GlobalHelper";

import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import Banner from '../../Components/Organisms/Banner';
import ActionTittle from '../../Components/Molecules/ActionTittle';
import Title from '../../Components/Atoms/Title';
import Subtitle from '../../Components/Atoms/Subtitle';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import Button, {ButtonType} from "../../Components/Atoms/Button";

export default {
    title: 'Organisms/Banner',
    component: Banner,
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
    textBodyBanner: string;
    imagePath: string;
    isExternal: boolean,
}

export const Primary: Story = {
    args: {
        subtitle: "Soy un subtítulo",
        title: "Soy un título",
        buttonText: "Soy un boton",
        buttonPath: 'localhost:6006/',
        textBodyBanner: 'Soy un texto',
        imagePath: 'images/Banners/Banner1.jpg',
        isExternal: true
    },
    render: (args: argsProps) =>
        (
            <Banner imagePath={args.imagePath} imageClassname={'h-[183px] md:h-[320px]'}>
                <ActionTittle>
                    <Subtitle textColor={Color.BrandWhite} className='text-left'>
                        {args.subtitle}
                    </Subtitle>
                    <Title textColor={Color.BrandWhite} size={Size.Md} className='text-left'>
                        {args.title}
                    </Title>
                    {useIsWindowSizeBellow(ScreenSize.Tablet)?'':<Button path={args.buttonPath} onClickFunction={() => console.log('function')}
                            withArrow
                            type={ButtonType.Primary} isExternal={args.isExternal}
                            className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                        {args.buttonText}
                    </Button>}
                </ActionTittle>
                <TextBody textColor={Color.BrandWhite} type={TextType.Body} className='text-left'>
                    {args.textBodyBanner}
                </TextBody>
                {useIsWindowSizeBellow(ScreenSize.Tablet)?<Button path={args.buttonPath} onClickFunction={() => console.log('function')}
                            withArrow
                            type={ButtonType.Primary} isExternal={args.isExternal}
                            className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                        {args.buttonText}
                    </Button>:''}
            </Banner>
        )

};