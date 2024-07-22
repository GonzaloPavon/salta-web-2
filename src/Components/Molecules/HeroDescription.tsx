import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType, componentExists } from '../../Helpers/GlobalHelper';

interface HeroDescriptionCardProps {
    children: ReactNode;
}

function HeroDescription(props: HeroDescriptionCardProps) {

    const titleClassname = ''+(componentExists('Subtitle', props.children)?' mt-4 md:mt-6 ':'')+(componentExists('TextBody', props.children)?' mb-4 md:mb-3 ':'')

    return (
        <div className='max-w-[20.938rem] md:max-w-[37.5rem]'>
             {getChildByType(AtomComponent.Subtitle, props.children)}
            <div className={titleClassname}>
                {getChildByType(AtomComponent.Title, props.children)}
            </div>
            {getChildByType(AtomComponent.TextBody, props.children)}
        </div>
    );
    }

export default HeroDescription;