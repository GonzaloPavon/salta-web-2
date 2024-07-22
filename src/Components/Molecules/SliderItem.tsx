import {MoleculeComponent} from "../../Enums/MoleculeComponent";

interface SliderItemProps {
    sliderVideoId: string;
}

function SliderItem(props: SliderItemProps) {

    return (
        <div className=' !flex items-stretch bg-[#1D2939] min-h-[30rem] rounded-3xl text-[#475467] slider-child border-solid border-white border-2'>
            <iframe src={"https://www.youtube.com/embed/"+props.sliderVideoId} width="100%" height="480px" className='rounded-3xl '></iframe>
        </div>
    );

}

SliderItem.componentName = MoleculeComponent.SliderItem;
export default SliderItem;