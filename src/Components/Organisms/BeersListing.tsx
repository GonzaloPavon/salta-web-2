import React, { ReactNode } from 'react';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import { getArrayChildByType } from '../../Helpers/GlobalHelper';

interface BeersListingProps {
    children: ReactNode;
}

function BeersListing(props: BeersListingProps) {
  
    return (
        <div className='grid grid-cols-2 gap-4 items-center content-center'>
            {getArrayChildByType(MoleculeComponent.BeerCard, props.children)}
        </div>
    );
    }

export default BeersListing;