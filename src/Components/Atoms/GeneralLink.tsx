import  { NavLink } from 'react-router-dom';

import {AtomComponent} from "../../Enums/AtomComponent";

enum LinkType {
    General = "General",
    Social = "Social"
}

interface GeneralLinkProps {
    type: LinkType;
    isExternal: boolean;
    path: string;
    children: string;
    className?: string;
    onClickFunction?: () => void;

}

function GeneralLink(props: GeneralLinkProps) {
    let GeneralLinkClasses='';
    GeneralLinkClasses = GeneralLinkClasses.concat(
        props.type === LinkType.General? ' text-general-link font-600 ': ' text-contact-link md:text-contact-link-desktop font-400 underline decoration-1 '
        , " text-brand/white uppercase "
        ,props.className?props.className:''
    );
    return (
        <NavLink to={props.path} target={props.isExternal?'blank_':''} className={GeneralLinkClasses} onClick={props.onClickFunction}>{props.children}</NavLink>
    );
    }

GeneralLink.componentName = AtomComponent.GeneralLink;
export {LinkType};
export default GeneralLink;