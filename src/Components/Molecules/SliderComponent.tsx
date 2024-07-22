import { ReactNode} from 'react';
import {MoleculeComponent} from "../../Enums/MoleculeComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ScreenSize} from "../../Enums/ScreenSize";
//Helpers
import {useIsWindowSizeBellow} from "../../Helpers/GlobalHelper";

interface SliderComponentProps {
    children: ReactNode;
}

function SliderComponent(props: SliderComponentProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
  };
  
    return (
      <div className='h-full'>
        <Slider {...settings}>
          {props.children}
        </Slider>
      </div>
    );
    }
SliderComponent.componentName = MoleculeComponent.SliderComponent;
export default SliderComponent;