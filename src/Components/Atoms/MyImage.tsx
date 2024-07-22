import {AtomComponent} from "../../Enums/AtomComponent";

interface MyImageProps {
    imagePath : string;
    imageAlt? : string;
    className?: string;
}

function MyImage(props: MyImageProps) {

    let MyImageClasses='';
    MyImageClasses = MyImageClasses.concat(
        " rounded-t-3xl border-b-2 border-brand/blue border-solid w-full md:h-[344px] mt-[-64px] "
        ,props.className?props.className:''
    );

    return (
        <img src={props.imagePath} alt={props.imageAlt} className={MyImageClasses}/>
    );
    }
MyImage.componentName = AtomComponent.MyImage;

export default MyImage;