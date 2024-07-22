import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";

interface TimeLineCardProps {
    year  : string;
    children: ReactNode;
}

function TimeLineCard(props: TimeLineCardProps) {

    return (
        <div className='text-left text-brand/white bg-brand/darker-blue rounded-[2rem] p-8 border-solid border-2 border-brand/blue max-w-[336px]'>         
            <h2 className='font-900 text-title-sm lg:text-title-desktop-sm mb-3'>{props.year}</h2>
            <div>{getChildByType(AtomComponent.TextBody, props.children)} </div>
        </div>
    );
    }
TimeLineCard.componentName = MoleculeComponent.TimeLineCard;
export default TimeLineCard;