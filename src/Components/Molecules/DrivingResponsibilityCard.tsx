import React, {ReactNode} from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {getChildByType} from '../../Helpers/GlobalHelper';

interface DrivingResponsibilityCardCardProps {
    children: ReactNode;
    imagePath?: string;
}

function DrivingResponsibilityCard(props: DrivingResponsibilityCardCardProps) {

    return (
        <div className='overflow-hidden flex flex-col-reverse md:flex-row bg-gray/900 rounded-3xl border-2 border-brand/blue border-solid bg-no-repeat'
            style={{
                'backgroundImage': 'url(/images/Backgrounds/BlurredShape.png), url(/images/Backgrounds/BlurredShape2.png)',
                'backgroundPosition': 'left top, right top'
            }}>
            <div className='w-full my-auto py-8 md:py-[10.156rem] px-5 md:pl-16 md:pr-4'>
                {getChildByType(AtomComponent.Subtitle, props.children)}
                {getChildByType(AtomComponent.Title, props.children)}
                {getChildByType(AtomComponent.TextBody, props.children)}
            </div>
            <div className='overflow-hidden max-h-[15rem] md:max-h-[34.375rem]'>
                <img src={props.imagePath} alt="Si tomaste, no manejes"
                     className='object-cover h-full w-[-moz-available]  w-[-webkit-fill-available] w-[-fill-available] md:w-[43rem]'/>
            </div>
        </div>
    );
}

export default DrivingResponsibilityCard;