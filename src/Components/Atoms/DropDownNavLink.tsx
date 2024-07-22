import React, {ReactNode, useState} from 'react';

import {modifiedLinks} from "../../Helpers/GlobalHelper";

//Dropdown arrow
import { ReactComponent as DropdownArrow } from '../../Assets/uil_angle-down.svg';

interface DropDownNavLinkProps {
    className?: string;
    linkTitle : string;
    children: ReactNode;
    onClickFunction: () => void;
}

function DropDownNavLink (props: DropDownNavLinkProps) {

    const [isOpen, setIsOpen] = useState(false);

    let WrapperClassname = '';

    WrapperClassname = WrapperClassname.concat(
        "text-general-link font-600 text-brand/white relative bg-inherit cursor-pointer"
        , props.className?props.className:''
    );

    const changeDropdownState =()=>{
        setIsOpen(!isOpen);
    }


    const dropDownArrowClassname = !isOpen?'':'rotate-180';

    return (
        <div className={WrapperClassname}>
            <div className=' mb-5 lg:mb-0 flex flex-row items-end bg-inherit uppercase' onClick={changeDropdownState}>
                {props.linkTitle}
                <DropdownArrow fill='#FFFFFF' stroke='#FFFFFF' height='16px' width='16px' className={dropDownArrowClassname}/>
            </div>
            {!isOpen?'':
            <div className='flex flex-col bg-gray/900/50 rounded-xl mt-2  p-6 space-y-6 lg:absolute w-max animate-slideDown' onClick={changeDropdownState}>{modifiedLinks(props.onClickFunction,props.children)}</div>
            }     
        </div>
    );
}

export default DropDownNavLink ;