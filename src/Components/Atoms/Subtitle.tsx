import {Color} from "../../Enums/Color";
import {AtomComponent} from "../../Enums/AtomComponent";

interface SubtitleProps {
    textColor: Color.TextPrimary | Color.BrandWhite;
    className?: string;
    children: string;

}

function Subtitle(props: SubtitleProps) {

    let textClasses = '';
    textClasses = textClasses.concat(
        getTextColor()
        , " text-subtitle text-subtitle-lg text-subtitle-2xl   font-600 whitespace-pre-line uppercase ",
        props.className ? props.className : ''
    );

    function getTextColor() {
        switch (props.textColor) {
            case Color.TextPrimary:
                return " text-text/primary"
            case Color.BrandWhite:
                return " text-brand/white"
            default:
                return " text-text/primary"
        }
    }

    function getChildren() {
        if (typeof props.children !== 'string') {
            console.error('Children must be a string');
            return null;
        } else {
            return props.children;
        }
    }

    return (
        <h2 className={textClasses}>{getChildren()}</h2>
    );
}

Subtitle.componentName = AtomComponent.Subtitle;

export default Subtitle;