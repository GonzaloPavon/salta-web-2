import React, {ReactNode} from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {getChildByType} from '../../Helpers/GlobalHelper';

enum ImagePosition {
    Right = "Right",
    Left = "Left"
}

interface ImageTextAreaProps {
    imagePath: string;
    imagePosition: ImagePosition;
    children: ReactNode;
}

function ImageTextArea(props: ImageTextAreaProps) {

    const wrapperClassname = 'flex-col bg-[#0B2143] rounded-3xl border-2 border-brand/blue border-solid max-w-[25rem] h-auto';

    const textAreaClassname = 'flex-col justify-between h-auto mx-auto my-auto w-full md:w-[25rem] space-y-2 md:space-y-3 my-[3.438rem] text-center p-4';


    return (
        <div className={wrapperClassname}>
            <div className='overflow-hidden max-h-[250px] rounded-t-3xl'>
                {getChildByType(AtomComponent.MyImage, props.children)}
            </div>   
            <div className={textAreaClassname}>
                {getChildByType(AtomComponent.Title, props.children)}
                {getChildByType(AtomComponent.TextBody, props.children)}
            </div>
        </div>
    );
}

export {ImagePosition};
export default ImageTextArea;
