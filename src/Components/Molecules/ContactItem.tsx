import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";

interface ContactItemProps {
    children: ReactNode;
}

function ContactItem(props: ContactItemProps) {

    return (
        <div className='flex flex-row space-x-3'>
            {getChildByType(AtomComponent.GeneralIcon, props.children)}
            {getChildByType(AtomComponent.GeneralLink, props.children)}
        </div>
    );
    }
ContactItem.componentName = MoleculeComponent.ContactItem;
export default ContactItem;