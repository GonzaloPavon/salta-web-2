import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";
import {AtomComponent} from "../../Enums/AtomComponent";

interface TitleProps {
    size: Size;
    textColor: Color.TextPrimary | Color.BrandWhite  | Color.BrandDarkerBlue;
    className?: string;
    children: string;

}

function Title(props: TitleProps) {

    let textClasses = '';
    textClasses = textClasses.concat(
        getTextColor()
        , getTextSize()
        , " font-900 whitespace-pre-line uppercase "
        , props.className?props.className:''
    );

    function getTextSize() {
        switch (props.size) {
            case Size.Xs:
                return " text-title-xs md:text-title-desktop-xs"
            case Size.Sm:
                return " text-title-sm md:text-title-desktop-sm"
            case Size.Md:
                return " text-title-md md:text-title-desktop-md"
            case Size.Lg:
                return " text-title-lg md:text-title-desktop-lg"
            case Size.Xl:
                return " text-title-xl lg:text-title-desktop-xl"
            default:
                return " text-title-sm md:text-title-desktop-sm"

        }
    }

    function getTextColor() {
        switch (props.textColor) {
            case Color.TextPrimary:
                return " text-text/primary"
            case Color.BrandWhite:
                return " text-brand/white"
            case Color.BrandDarkerBlue:
                return "text-brand/darker-blue third-title"
            default:
                return " text-text/primary"
        }
    }


    function getChildren() {
        if (typeof props.children !== 'string') {
            console.error('Children must be a string');
            return null;
          }
        else{
            return props.children;
         } 
    }

    return (
        <h1 className={textClasses}>{getChildren()}</h1>
    );
}

Title.componentName = AtomComponent.Title;
export default Title;