import React from 'react';

//Helpers
import {useIsWindowSizeBellow} from "../../Helpers/GlobalHelper";

//Enums
import {ScreenSize} from "../../Enums/ScreenSize";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

//Components
import Banner from '../../Components/Organisms/Banner';
import TextArea from '../../Components/Molecules/TextArea';
import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import Subtitle from "../../Components/Atoms/Subtitle";
import ActionTittle from '../../Components/Molecules/ActionTittle';
import Button, {ButtonType} from "../../Components/Atoms/Button";
import Section, {Position} from '../Organisms/Section';
import BeersListing from '../../Components/Organisms/BeersListing';
import BeerCard from '../../Components/Molecules/BeerCard';
import SliderComponent from '../../Components/Molecules/SliderComponent';
import SliderItem from '../../Components/Molecules/SliderItem';


function Home() {
    return (
        <>
            <Section    height={56} align={Position.Center} imagePath="/images/Backgrounds/newHomeBg.jpg" withPaddings className={' bg-center'}>
                <TextArea rightAlign={true} className='mb-[25rem]'>
                    <Title textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[25rem]" size={Size.Xl}>
                     El sabor que nos une.
                    </Title>
                </TextArea>
                <img src="/images/BottomImages/BottomCurved1.png" className='w-full absolute bottom-0 z-[2] mx-[-1.25rem] lg:mx-[-6.25rem] xl:mx-[-10rem]'/>
            </Section>
            <Section    height={27.563} align={Position.Center} imagePath="/" withPaddings className=' bg-brand/blue '>
                <ActionTittle>
                    <Subtitle textColor={Color.BrandWhite} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                    CERVEZA SALTA 
                    </Subtitle>
                    <Title textColor={Color.BrandWhite} size={Size.Md} className='text-left max-w-[20.938rem] md:max-w-[37.5rem]  '>
                    Es mucho más que una cerveza, es algo que nos representa, es un emblema de nuestra provincia.
                    </Title>
                    <Button path={'/us'} onClickFunction={() => console.log('function')}
                            withArrow
                            type={ButtonType.Primary} isExternal={false}
                            className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                        {'Ver más'}
                    </Button>
                </ActionTittle>
            </Section>
            <Section    height={useIsWindowSizeBellow(ScreenSize.Tablet)?27:50} align={Position.Top} imagePath="/" withPaddings className=' bg-brand/blue '>
                <BeersListing>
                    <BeerCard imagePath={'/images/Beers/rubia2.png'} path='/products/rubia' isFirst>
                    </BeerCard>
                    <BeerCard imagePath={'/images/Beers/negra2.png'} path='/products/negra' isFirst={false}>
                    </BeerCard>
                </BeersListing>
                <img src="/images/BottomImages/BottomCurved2.png" className='w-full absolute bottom-0 z-[120] mx-[-1.25rem] lg:mx-[-6.25rem] xl:mx-[-10rem]'/>
            </Section>
            <Section    height={54} align={Position.Center} imagePath="/" withPaddings className=' bg-gray/900 '>
                <Banner imagePath='images/Banners/Banner1.jpg' imageClassname={'h-[7rem] md:h-[16rem] lg:h-auto '}>
                    <ActionTittle>
                        <Subtitle textColor={Color.BrandWhite} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                            HECHA CON LO MEJOR QUE TENEMOS
                        </Subtitle>
                        <Title textColor={Color.BrandWhite} size={Size.Md} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                            Compartir es parte de la esencia de 
                            Salta y lo que la hace tan única.
                        </Title>
                        {useIsWindowSizeBellow(ScreenSize.Tablet)?'':<Button path='/us' onClickFunction={() => console.log('function')}
                                withArrow
                                type={ButtonType.Primary} isExternal
                                className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                            {'Ver más'}
                        </Button>}
                    </ActionTittle>
                    <TextBody textColor={Color.BrandWhite} type={TextType.Body} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                     Disfrutar en compañía es la esencia de Salta y lo que la hace tan única.
                    </TextBody>
                    {useIsWindowSizeBellow(ScreenSize.Tablet)?<Button path='/us' onClickFunction={() => console.log('function')}
                                withArrow
                                type={ButtonType.Primary} isExternal
                                className=" self-end w-max mr-auto mr-auto md:mr-0 ">
                            {'Ver más'}
                        </Button>:''}
                </Banner>
            </Section>
            <Section    height={useIsWindowSizeBellow(ScreenSize.Tablet)?41:46.313} align={Position.Center} withPaddings={true} className=' bg-gray/900 bg-center'>
                <Subtitle textColor={Color.BrandWhite} className='text-center font-600 mb-6'>
                    Más sobre cerveza salta
                </Subtitle>
                <SliderComponent>
                    <SliderItem sliderVideoId='AA45u5GAbpU'/>
                    <SliderItem sliderVideoId='GK65joYjvIM'/>
                    <SliderItem sliderVideoId='wUtnbtrphrw'/>
                </SliderComponent>
            </Section>
            <Section    height={40} align={Position.Top} imagePath={'images/Banners/BannerHome.JPG'} withPaddings={true} className=' bg-brand/dark bg-center '>
                    <ActionTittle rightAlign={true}>
                        <Title textColor={Color.BrandWhite} size={Size.Lg} className='max-w-[38.5rem] mt-8'>
                            Una pasión que compartimos en TODO SALTA
                        </Title>
                        {/*<Button path={''} onClickFunction={() => console.log('function')}
                                type={ButtonType.Secondary} isExternal={true}
                                className=" self-end w-max mr-auto mr-auto lg:mr-0 ">
                            Comprar ahora
                        </Button>*/}
                    </ActionTittle>
            </Section>
        </>
    );
    }

export default Home;