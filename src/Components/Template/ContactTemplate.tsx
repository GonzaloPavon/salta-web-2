import React, { ReactNode } from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {OrganismsComponent} from "../../Enums/OrganismsComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';

interface ContactTemplateProps {
    children: ReactNode;
}

function ContactTemplate(props: ContactTemplateProps) {

    return (
        <div className='flex flex-col md:flex-row w-full justify-center lg:justify-between  space-y-10 md:space-y-0 md:space-x-12 text-left'>
            {getChildByType(OrganismsComponent.ContactItemList, props.children)}
            {getChildByType(AtomComponent.MapLocation, props.children)}        
        </div>
    );
    }

export default ContactTemplate;