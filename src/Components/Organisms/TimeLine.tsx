import React, { ReactNode } from 'react';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import { getArrayChildByType } from '../../Helpers/GlobalHelper';

interface TimeLineProps {
    children: ReactNode;
}

function TimeLine(props: TimeLineProps) {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 justify-items-center'>
             {getArrayChildByType(MoleculeComponent.TimeLineCard, props.children)}
        </div>
    );
    }

export default TimeLine;