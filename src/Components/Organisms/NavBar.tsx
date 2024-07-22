import React, {ReactNode, useState} from 'react';
import  { NavLink } from 'react-router-dom';
import {useIsWindowSizeBellow, modifiedLinks} from "../../Helpers/GlobalHelper";

//Menu Icons
import { ReactComponent as CloseMenu } from '../../Assets/CloseMenu.svg';
import { ReactComponent as OpenMenu } from '../../Assets/OpenMenu.svg';

import {ScreenSize} from "../../Enums/ScreenSize";

interface NavBarProps {
    logoPath : string;
    children: ReactNode;
}

function NavBar(props: NavBarProps) {

    const isWindowSizeBelow = useIsWindowSizeBellow(ScreenSize.Tablet);

    const [mobileMenu, setMobileMenu] = useState(false);

    const ShowMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    const closeMenuOnMobile = ()=>{
        setMobileMenu(false);
    }

    return (
        <header className='w-full z-50 absolute top-0'>
            <nav className='w-full px-5 lg:px-[6.25rem] xl:px-[10rem] py-[1.125rem] lg:py-6 flex flex-row justify-between items-center bg-gray/900/50'>
                <div className='text-brand/white mr-auto'> <NavLink to='/' className={'mr-auto '}><img src={props.logoPath} alt="" className='lg:h-12 mr-auto '/></NavLink></div>
                <div className='text-brand/white flex lg:hidden ml-auto' onClick={ShowMobileMenu}>
                    {
                        mobileMenu ?
                        <CloseMenu fill='#FFFFFF' stroke='#FFFFFF' height='32px' width='32px' className='ml-auto'/>
                        :<OpenMenu fill='#FFFFFF' stroke='#FFFFFF' height='32px' width='32px' className='ml-auto'/>
                    }
                </div>
                <ul className='hidden lg:flex flex-row items-center space-x-12'>{props.children}</ul>
            </nav>
            {mobileMenu && isWindowSizeBelow?<ul className='p-5 space-y-5 bg-gray/900 h-screen'>{modifiedLinks(closeMenuOnMobile,props.children)}</ul>:''}
        </header>

    );
}

export default NavBar;