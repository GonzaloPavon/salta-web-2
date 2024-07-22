import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';

interface BannerProps {
    imagePath: string;
    imageClassname?: string;
    children: ReactNode;
}

function Banner(props: BannerProps) {

  const wrapperClassname = 'w-full space-y-8 md:space-y-12';
  const imageClassname = 'mx-[-1.25rem] md:mx-[-12.5rem] w-[-moz-available]  w-[-webkit-fill-available] w-[-fill-available] md:h-[25rem] '+props.imageClassname;

    return (
        <div className={wrapperClassname}>
            {getChildByType(MoleculeComponent.ActionTittle, props.children)}
            <div className='overflow-hidden w-[-moz-available]  w-[-webkit-fill-available] w-[-fill-available] mx-[-20px] lg:mx-[-200px]'>
                <img src={props.imagePath} alt="Cerveza Salta Banner" className={imageClassname} style={{'maxWidth':'none'}}/>  
            </div>   
            {getChildByType(AtomComponent.TextBody, props.children)}
            {getChildByType(AtomComponent.Button, props.children)}
        </div>
    );
    }

export default Banner;