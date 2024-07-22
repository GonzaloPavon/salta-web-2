import React, { ReactNode } from 'react';

import { getChildByType,  componentExists } from '../../Helpers/GlobalHelper';

interface TextAreaProps {
    children: ReactNode;
    rightAlign?: boolean;
    className?: string;
}

function TextArea(props: TextAreaProps) {

  const titleClassname = ''+(componentExists('Subtitle', props.children)?' mt-4 ':'')+(componentExists('TextBody', props.children)?' mb-4 ':'')

  let textContainerClassname='';
  textContainerClassname = textContainerClassname.concat(
        " flex flex-col "
        ,props.rightAlign?" text-right  items-end ":" text-left items-start"
        ,props.className?props.className:''
  );
  
    return (
        <div className={textContainerClassname}>
            {getChildByType('Subtitle', props.children)}
            <div className={titleClassname}>
                {getChildByType('Title',props.children)}
            </div>
            {getChildByType('TextBody', props.children)}
        </div>
    );
    }

export default TextArea;