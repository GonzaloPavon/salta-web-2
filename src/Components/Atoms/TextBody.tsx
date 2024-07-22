import React from 'react';
import {Color} from "../../Enums/Color";
import {AtomComponent} from "../../Enums/AtomComponent";

enum TextType {
    Hero = "Hero",
    Body = "Body"
}

interface TextBodyProps {
    type: TextType;
    textColor: Color.TextPrimary | Color.BrandWhite;
    className?: string;
    children: string;

}

function TextBody(props: TextBodyProps) {

    let textClasses='';
    textClasses = textClasses.concat(
        getTextColor()
        , getTextSize()
        , " font-400 whitespace-pre-line "
        ,props.className?props.className:''
    );

    function getTextSize () {
        switch (props.type) {
            case TextType.Body:
                return " text-body "
            case TextType.Hero:
                return " text-body md:text-body-hero-desktop "
            default:
                return " text-body "
        }
    }

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
          }
        else{
            return props.children;
         } 
    }

    const parts = props.children.split('<br/>');

    return (
        <p className={textClasses}>
         {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
        </p>
    );
}

TextBody.componentName = AtomComponent.TextBody;

export {TextType};
export default TextBody;