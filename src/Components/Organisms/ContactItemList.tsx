import React, { ReactNode } from 'react';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType, getArrayChildByType } from '../../Helpers/GlobalHelper';
import {OrganismsComponent} from "../../Enums/OrganismsComponent";

interface ContactItemListProps {
    children: ReactNode;
}

function ContactItemList(props: ContactItemListProps) {

    return (
        <div className='space-y-8 md:space-y-12'>
            <div className=' md:max-w-[24.25rem] '>{getChildByType(AtomComponent.Title, props.children)}</div>
            <div className='space-y-6 md:space-y-8'>{getArrayChildByType(MoleculeComponent.ContactItem, props.children)}</div>
        </div>
    );
    }
ContactItemList.componentName = OrganismsComponent.ContactItemList
export default ContactItemList;