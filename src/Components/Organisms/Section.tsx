import React, { ReactNode } from 'react';
import { getChildByType, removeChildFromChildren  } from '../../Helpers/GlobalHelper';
import {AtomComponent} from "../../Enums/AtomComponent";

enum Position {
    Top = 'Top', 
    Center = 'Center',
    Bottom = 'Bottom'
}

interface SectionProps {
    className?: string;
    childrenClassName?: string;
    imagePath?  : string;
    withPaddings: boolean;
    children : ReactNode;
    height : number;
    align : Position;
}

function Section(props: SectionProps) {

    let wrapperSectionClassname = '';

    wrapperSectionClassname = wrapperSectionClassname.concat(
        props.withPaddings?' px-5 lg:px-[6.25rem] xl:px-[10rem]':''
        , " flex flex-col bg-no-repeat bg-cover relative w-full "
        , props.className?props.className:''
    );

    let childrenClassname = '';

    childrenClassname = childrenClassname.concat(
        props.childrenClassName?props.childrenClassName:''
        ,getChildrenPosition()
        , " z-40 w-full bg-transparent"
    );

    function getChildrenPosition() {
        switch (props.align) {
            case Position.Top:
                return " top-0"
            case Position.Center:
                return " top-0 bottom-0 my-auto"
            case Position.Bottom:
                return " bottom-0 mt-auto"
            default:
                return " top-0"
        }
    }
  
    return (
        <div className={wrapperSectionClassname} style={{'backgroundImage':'url('+props.imagePath+')','height':props.height+'rem'}}>
            <div className={childrenClassname}>
                {removeChildFromChildren ('img', props.children)}
            </div>
            {getChildByType('img', props.children)}
        </div>
    );
    }

export {Position};
export default Section;