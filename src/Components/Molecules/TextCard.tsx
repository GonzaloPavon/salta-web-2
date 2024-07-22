import React, {ReactNode} from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {getChildByType} from '../../Helpers/GlobalHelper';

interface TextCardProps {
    isBig: boolean;
    children: ReactNode;
    classname?: string;
}

function TextCard(props: TextCardProps) {
    let textWrapperClassname = '';

    textWrapperClassname = textWrapperClassname.concat(
        props.isBig ? 'py-[8.406rem] md:pt-[10.469rem] md:pb-[9.844rem] px-8' : 'py-20 md:py-[5rem] px-6 '
        , ' w-[auto]'
        , ' text-center mx-auto md:px-4'
        ,props.classname ? props.classname : ''
        , ' bg-brand/darker-blue rounded-3xl border-2 border-brand/blue border-solid bg-no-repeat flex justify-center'
    );

    return (
        <div className={textWrapperClassname} style={{
            'backgroundImage': 'url(/images/Backgrounds/BlurredShape.png), url(/images/Backgrounds/BlurredShape2.png)',
            'backgroundPosition': 'left top, right top'
        }}>
            <div>
                {getChildByType(AtomComponent.Subtitle, props.children)}
                {getChildByType(AtomComponent.Title, props.children)}
                {getChildByType(AtomComponent.TextBody, props.children)}
            </div>
        </div>
    );
}

export default TextCard;