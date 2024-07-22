import {Size} from "../../Enums/Size";

//Social Icons
import { ReactComponent as UilFacebook } from '../../Assets/Social/uil_facebook.svg';
import { ReactComponent as UilInstagramAlt } from '../../Assets/Social/uil_instagram-alt.svg';
import { ReactComponent as UilTwitter } from '../../Assets/Social/uil_twitter.svg';
import { ReactComponent as UilYoutube } from '../../Assets/Social/uil_youtube.svg';
//Contact Icons
import { ReactComponent as Phone } from '../../Assets/Contact/uil_phone-alt.svg';
import { ReactComponent as Location } from '../../Assets/Contact/uil_map-marker.svg';
import { ReactComponent as InstagramContact } from '../../Assets/Contact/uil_instagram.svg';
import {AtomComponent} from "../../Enums/AtomComponent";

enum IconType {
    SocialFacebook= "SocialFacebook",
    SocialInstagram = "SocialInstagram",
    SocialTwitter = "SocialTwitter",
    SocialYoutube = "SocialYoutube",
    ContactPhone = "ContactPhone",
    ContactLocation = "ContactLocation",
    ContactInstagram = "ContactInstagram"
}

interface IconProps {
    size?: Size.Md | Size.Sm;
    color: string;
    url?: string;
    type: IconType;
    isExternal?: boolean;

}

function GeneralIcon(props: IconProps) {

    const getIconSize =()=>{
        if (props.size===Size.Sm) {
           return '32px'
        }
        else{
            return '48px'
        }
    }

    const getIcon=()=>{
        switch (props.type) {
            case IconType.SocialFacebook:
                 return(<UilFacebook fill={props.color} stroke={props.color} height={getIconSize()} width={getIconSize()}/>)
            break;
            case IconType.SocialInstagram:
                return(<UilInstagramAlt fill={props.color} stroke={props.color} height={getIconSize()} width={getIconSize()}/>)
            break;
            case IconType.SocialTwitter:
                return(<UilTwitter fill={props.color} stroke={props.color} height={getIconSize()} width={getIconSize()}/>)
            break;
            case IconType.SocialYoutube:
                return(<UilYoutube fill={props.color} stroke={props.color} height={getIconSize()} width={getIconSize()}/>)
            break;
            case IconType.ContactPhone:
                return <Phone fill={props.color} height={'24px'} width={'24px'} className="self-center justify-self-center"/>
            break;
            case IconType.ContactLocation:
                return <Location fill={props.color} height={'24px'} width={'24px'} className="self-center justify-self-center"/>
            case IconType.ContactInstagram:
                return <InstagramContact fill={props.color} height={'24px'} width={'24px'} className="self-center justify-self-center"/>
            break;
            default:
                return(<UilFacebook fill={props.color} stroke={props.color} height={getIconSize()} width={getIconSize()}/>)
            break;
        }
    }

    return (
    <a href={props.url} target={props.isExternal?'blank_':''} className="flex justify-items-center">
        {getIcon()} 
    </a>         
  );
}

GeneralIcon.componentName = AtomComponent.GeneralIcon

export {IconType};
export default GeneralIcon;