import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';

interface ActionTextAreaProps {
    children: ReactNode;
}

function ActionTextArea(props: ActionTextAreaProps) {

  const wrapperClassname = 'flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 w-full '

  const textAreaClassname = 'w-full md:w-[30.5rem] text-left space-y-3  md:space-y-4 '


    return (
        <div className={wrapperClassname}>
            <div className={textAreaClassname}>{getChildByType(AtomComponent.Subtitle, props.children)}{getChildByType(AtomComponent.Title, props.children)}</div>
            {getChildByType(AtomComponent.Button, props.children)}
        </div>
    );
    }

export default ActionTextArea;
