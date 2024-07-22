import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";

interface ActionTittleProps {
    children: ReactNode;
    rightAlign?: boolean;
}

function ActionTittle(props: ActionTittleProps) {

  const wrapperClassname = 'flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 w-full '
  let titleClassname = ''
  
  titleClassname = titleClassname.concat(
    " max-w-[20.938rem] md:max-w-[37.5rem] space-y-3 md:space-y-4 "
        ,props.rightAlign?' ml-auto text-right ':' mr-auto text-left '
    );
    return (
        <div className={wrapperClassname}>
            <div className={titleClassname}>{getChildByType(AtomComponent.Subtitle, props.children)}{getChildByType(AtomComponent.Title, props.children)}</div>
            {getChildByType(AtomComponent.Button, props.children)}
        </div>
    );
    }
ActionTittle.componentName = MoleculeComponent.ActionTittle
export default ActionTittle;