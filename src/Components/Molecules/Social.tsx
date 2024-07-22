import React, { ReactNode } from 'react';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";

interface SocialProps {
    children: ReactNode;
}

function Social(props: SocialProps) {
  
    return (
        <div className='flex flex-row space-x-5 md:space-x-8'>
            {props.children}
        </div>
    );
    }
Social.componentName = MoleculeComponent.Social;
export default Social;