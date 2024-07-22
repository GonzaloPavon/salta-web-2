import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';

interface BeerCardProps {
    imagePath   : string;
    path?: string;
    isFirst?: boolean;
}

function BeerCard(props: BeerCardProps) {

    let BeerCardClasses ='';
    BeerCardClasses = BeerCardClasses.concat(
        " mt-8 md:mt-10 mb-0 max-w-[11.5rem] lg:max-w-[20rem] w-[-moz-available]  w-[-webkit-fill-available] w-[-fill-available]  z-[1] "
        ,props.isFirst?"ml-auto":"mr-auto"
    );

    return (
        <a href={props.path}>
            <div className={'lg:px-14 max-w-[512px] '+props.isFirst?'ml-auto':'mr-auto'} >
                <img className={BeerCardClasses} src={props.imagePath} alt="Cerveza Salta" />
            </div>
        </a>
    );
    }

BeerCard.componentName = MoleculeComponent.BeerCard;
export default BeerCard;