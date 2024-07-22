import { ReactComponent as ArrowRight } from '../../Assets/uil_arrow-right.svg';
import {AtomComponent} from "../../Enums/AtomComponent";

enum ButtonType {
    Primary = "Primary",
    Secondary = "Secondary"
}

interface ButtonProps {

    type: ButtonType;
    path: string;
    onClickFunction: () => void;
    isExternal: boolean;
    className?: string;
    children: string;
    withArrow?:boolean;
}

function Button(props: ButtonProps) {
    let buttonsWrapperClasses ='';
    let buttonClasses = '';
    buttonClasses = buttonClasses.concat(
        getButtonType()
        , " border-solid border-2 rounded-3xl text-general-link h-max "
    );

    buttonsWrapperClasses = buttonsWrapperClasses.concat(
         " flex justify-center align-middle "
        , props.className?props.className:''
    );

    function getButtonType() {
        switch (props.type) {
            case ButtonType.Primary:
                return " text-brand/white bg-brand/white/20 py-2.5 px-5 border-brand/white"
            case ButtonType.Secondary:
                return " text-text/primary bg-brand/white py-4 px-6 border-transparent"
            default:
                return " "
        }
    }
    return (
        <div className={buttonsWrapperClasses}>
            <button className={buttonClasses + " cursor-pointer"} onClick={props.onClickFunction}>
                <a href={props.path} target={props.isExternal?'blank_':''} className="uppercase font-600 flex text-center justify-center">{props.children}</a>
            </button>
            {props.withArrow?
            <button className={buttonClasses + " cursor-pointer py-[10px] px-[16px]"} onClick={props.onClickFunction}>
                <a href={props.path} target={props.isExternal?'blank_':''} className="uppercase font-600 flex text-center justify-center"><ArrowRight height="15px" width="15px" /></a>
            </button>
            :''}
        </div>
    );
}

Button.componentName = AtomComponent.Button;

export {ButtonType};
export default Button;
