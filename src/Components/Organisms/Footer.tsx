import React, { ReactNode } from 'react';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import { getChildByType} from '../../Helpers/GlobalHelper';

interface FooterProps {
    children: ReactNode;
}

function Footer(props: FooterProps) {
  
    return (
        <div className='text-brand/white bg-gray/900 px-[4.844rem] lg:px-32 py-10 lg:pt-20 lg:pb-8 space-y-12 lg:space-y-20 static'>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between space-y-12 space-y-reverse lg:space-y-0'>
                {getChildByType(MoleculeComponent.SiteMapLinks, props.children)}
                {getChildByType(MoleculeComponent.Social, props.children)}
            </div>
            <div className='flex flex-col lg:flex-row text-center lg:text-start lg:justify-between space-y-6 lg:space-y-0 text-body font-400'>
                <span className='md:mx-auto lg:mx-0 md:pr-16'>© Cerveza Salta • Beber con moderación. Prohibida su venta a menores de 18 años.</span>
                <span>Powered by <a href="https://www.sappen.com.ar/" target='blank_' className='underline decoration-1 font-600'>Sappen Software Factory</a></span>
            </div>
        </div>
    );
    }

export default Footer;