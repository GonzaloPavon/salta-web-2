import React from 'react';

//Helpers
import {useIsWindowSizeBellow} from "../../Helpers/GlobalHelper";

//Enums
import {ScreenSize} from "../../Enums/ScreenSize";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

//Components
import ContactTemplate from '../../Components/Template/ContactTemplate';
import Banner from '../../Components/Organisms/Banner';
import ActionTittle from '../../Components/Molecules/ActionTittle';
import Button, {ButtonType} from "../../Components/Atoms/Button";
import ImageTextArea, {ImagePosition} from '../../Components/Molecules/ImageTextArea';
import MyImage from "../../Components/Atoms/MyImage";
import TextCard from '../../Components/Molecules/TextCard';
import TextArea from '../../Components/Molecules/TextArea';
import Title from '../../Components/Atoms/Title';
import MapLocation from '../../Components/Atoms/MapLocation';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import Subtitle from "../../Components/Atoms/Subtitle";
import Section, {Position}  from '../Organisms/Section';
import ContactItemList from '../../Components/Organisms/ContactItemList';
import ContactItem from '../../Components/Molecules/ContactItem';
import GeneralLink, {LinkType} from "../../Components/Atoms/GeneralLink";
import GeneralIcon, {IconType} from "../../Components/Atoms/GeneralIcon";

function BeerGarden() {

    return (
        <>
            <Section    height={50} align={Position.Center} imagePath="/images/Backgrounds/BeerGarden.png" withPaddings className={' bg-gray/900 '}>
                <TextArea>
                    <Title textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem]" size={Size.Sm}>
                        Turpis egestas sed tempus urna
                    </Title>
                    <Subtitle textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem]">
                        Jardín cervecero
                    </Subtitle>
                </TextArea>
            </Section>
            <Section  height={useIsWindowSizeBellow(ScreenSize.Tablet)?17.438:22.375} align={Position.Top} imagePath="" withPaddings className={' bg-brand/blue '}>
                <TextCard isBig={false} classname=' absolute top-[-6.125rem] left-0 right-0 mx-[20px] lg:mx-[12.5rem]'>
                    <Title textColor={Color.BrandWhite} className=" max-w-[20.938rem] md:max-w-[30rem] mb-2 " size={Size.Sm}>
                        Salta, nuestras raíces
                    </Title>
                    <TextBody type={TextType.Body} textColor={Color.BrandWhite} className=" max-w-[20.938rem] md:max-w-[30rem] " >
                        Pellentesque habitant morbi tristique senectus. Proin libero nunc consequat interdum. Nisi vitae suscipit tellus mauris a diam. 
                    </TextBody>
                </TextCard>
            </Section>
            <Section height={useIsWindowSizeBellow(ScreenSize.Tablet)?49.688:50.938} align={Position.Center} imagePath="/" withPaddings className=' bg-brand/blue '>
                <Banner imagePath='images/Banners/Banner2.jpg' imageClassname={'h-[8.625rem] md:h-[20rem]'}>
                    <ActionTittle>
                        <Subtitle textColor={Color.BrandWhite} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                            Bebidas
                        </Subtitle>
                        <Title textColor={Color.BrandWhite} size={Size.Md} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                            Disfrutá de nuestras variedades y mucho más
                        </Title>
                        {useIsWindowSizeBellow(ScreenSize.Tablet)?'':<Button path='/beergarden' onClickFunction={() => console.log('function')}
                                withArrow
                                type={ButtonType.Primary} isExternal
                                className=" self-end w-max mr-automd:mr-0 ">
                            {'Ver más'}
                        </Button>}
                    </ActionTittle>
                    <TextBody textColor={Color.BrandWhite} type={TextType.Body} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                        Mi sit amet mauris commodo quis imperdiet massa tincidunt. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Tincidunt augue interdum velit euismod in pellentesque massa.
                    </TextBody>
                    {useIsWindowSizeBellow(ScreenSize.Tablet)?<Button path='/beergarden' onClickFunction={() => console.log('function')}
                                withArrow
                                type={ButtonType.Primary} isExternal
                                className=" self-end w-max mr-auto md:mr-0 ">
                            {'Ver más'}
                        </Button>:''}
                </Banner>
            </Section>
            <Section    height={60.063} align={Position.Top} imagePath="" withPaddings className={' bg-brand/blue overflow-hidden '}>
                <ActionTittle>
                    <Subtitle textColor={Color.BrandWhite} className='text-left max-w-[20.938rem] md:max-w-[37.5rem] '>
                        Gastronomía
                    </Subtitle>
                    <Title textColor={Color.BrandWhite} size={Size.Md} className='text-left max-w-[20.938rem] md:max-w-[37.5rem]  '>
                        COMIDA RICA magna fermentum iaculis eu non
                    </Title>
                    {useIsWindowSizeBellow(ScreenSize.Tablet)?'':<Button path='/beergarden' onClickFunction={() => console.log('function')}
                                withArrow
                                type={ButtonType.Primary} isExternal
                                className=" self-end w-max mr-auto md:mr-0 ">
                            {'Ver menú'}
                        </Button>}
                </ActionTittle>
                <div className='flex flex-row justify-between  mt-12 absolute w-[-moz-available]  w-[-webkit-fill-available] w-[-fill-available]  mr-[-5%]'>
                    <MyImage isVertical imagePath={'images/Food/food-1.png'} isHorizontal={false} className='max-h-[22.5rem] lg:max-h-[35rem]'/>
                    <MyImage isVertical imagePath={'images/Food/food-2.png'} isHorizontal={false} className='max-h-[22.5rem] lg:max-h-[35rem]'/>
                    <MyImage isVertical imagePath={'images/Food/food-3.png'} isHorizontal={false} className='max-h-[22.5rem] lg:max-h-[35rem]'/>
                </div>
                {useIsWindowSizeBellow(ScreenSize.Tablet)?<Button path='/beergarden' onClickFunction={() => console.log('function')}
                                withArrow
                                type={ButtonType.Primary} isExternal
                                className=" self-end w-max mr-auto md:mr-0 mt-[30.313rem] ">
                            {'Ver menú'}
                        </Button>:<></>}
                <img src="/images/BottomImages/BottomCurved2.png" className='w-full absolute bottom-0 z-[2] mx-[-1.25rem] lg:mx-[-6.25rem] xl:mx-[-12.5rem]'/>
            </Section>
            <Section    height={41.25} align={Position.Center} imagePath="" withPaddings className={' bg-gray/900 '}>
                <ContactTemplate>
                    <ContactItemList>
                        <Title textColor={Color.BrandWhite} size={Size.Sm}>
                            Vení a conocer nuestro jardín cervecero
                        </Title>
                        <ContactItem >
                            <GeneralIcon type={IconType.ContactPhone} isExternal url={'tel:1154825090'} color='#FFFFFF'/>
                            <GeneralLink type={LinkType.Social} isExternal path={'tel:1154825090'}>1154825090</GeneralLink>
                        </ContactItem>
                        <ContactItem >
                            <GeneralIcon type={IconType.ContactInstagram} isExternal url={'https://www.instagram.com/saltacerveza/?hl=es-la'} color='#FFFFFF'/>
                            <GeneralLink type={LinkType.Social} isExternal path={'https://www.instagram.com/saltacerveza/?hl=es-la'}>instagram.com/cervezasalta</GeneralLink>
                        </ContactItem>
                        <ContactItem >
                            <GeneralIcon type={IconType.ContactLocation} isExternal url={'https://www.google.com/maps/place/Salta/@-24.7960848,-65.4306287,12z/data=!3m1!4b1!4m6!3m5!1s0x941bc3a35151b7f9:0xa5cd992cd587f206!8m2!3d-24.7821269!4d-65.4231976!16zL20vMDJ0YjVt?entry=ttu'} color='#FFFFFF'/>
                            <GeneralLink type={LinkType.Social} isExternal path={'https://www.google.com/maps/place/Salta/@-24.7960848,-65.4306287,12z/data=!3m1!4b1!4m6!3m5!1s0x941bc3a35151b7f9:0xa5cd992cd587f206!8m2!3d-24.7821269!4d-65.4231976!16zL20vMDJ0YjVt?entry=ttu'}>Nombre de calle 1234, Salta, Argentina</GeneralLink>
                        </ContactItem>
                    </ContactItemList>
                    <MapLocation latitude={-24.7960848} longitude={-65.4306287} zoomLevel={12}/>
                </ContactTemplate>
            </Section>
        </>
    );
    }

export default BeerGarden;