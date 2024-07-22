import React from 'react';

//Helpers
import {useIsWindowSizeBellow} from "../../Helpers/GlobalHelper";

//Enums
import {ScreenSize} from "../../Enums/ScreenSize";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";

//Components
import ImageTextArea, {ImagePosition} from '../Molecules/ImageTextArea';
import MyImage from "../Atoms/MyImage";
import TimeLine from '../Organisms/TimeLine';
import TimeLineCard from '../Molecules/TimeLineCard';
import TextCard from '../Molecules/TextCard';
import TextArea from '../Molecules/TextArea';
import Title from '../Atoms/Title';
import TextBody, {TextType} from "../Atoms/TextBody";
import Subtitle from "../Atoms/Subtitle";
import Section, {Position}  from '../Organisms/Section';

function Us() {

    return (
        <>
            <Section    height={50} align={Position.Center} imagePath="/images/Backgrounds/BGus.jpg" withPaddings className={' bg-gray/900 bg-center lg:bg-117% '}>
                <TextArea rightAlign={true} className='lg:mb-[15.5rem] mt-[90px]'>
                    <Title textColor={Color.BrandDarkerBlue} className="max-w-[25rem] md:max-w-[30rem] lg:max-w-[36rem]" size={Size.Xl}>
                        UN REFLEJO DE SALTA
                        EL SABOR QUE NOS UNE CON LOS QUE PASAMOS TAN BIEN
                    </Title>
                </TextArea>
            </Section>
            <Section    height={useIsWindowSizeBellow(ScreenSize.Tablet)?5:6} align={Position.Top} imagePath="" withPaddings className={' bg-brand/blue '}>
                <TextCard isBig={false} classname=' absolute top-[-6.125rem] left-0 right-0 mx-5 lg:mx-[6.25rem] xl:mx-[10rem]'>
                    <Title textColor={Color.BrandWhite} className=" mb-2 " size={Size.Sm}>
                        SALTA, NUESTRAS RAÍCES
                    </Title>
                    <TextBody type={TextType.Body} textColor={Color.BrandWhite} className=" max-w-[20.938rem] md:max-w-[30rem] mx-auto " >
                        Tener nuestra propia cerveza es un sentimiento que nos une. Por eso nos llena de orgullo que se llame como el lugar donde nacimos.
                    </TextBody>
                </TextCard>
            </Section>
            <Section  height={60} align={Position.Center} imagePath="" withPaddings className={' bg-brand/blue '} childrenClassName=' space-y-8 lg:space-y-12 mt-[65%] md:mt-[45%] lg:mt-[40%] xl:mt-auto '>
                <TextArea>
                    <Title textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem] " size={Size.Sm}>
                        de origen norteño, con proyección nacional
                    </Title>
                    <Subtitle textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem]">
                        Nuestra historia
                    </Subtitle>
                </TextArea>
                <TextCard isBig={false} classname=' absolute left-0 right-0 mx-5 lg:mx-[6.25rem] xl:mx-[10rem]'>
                    <TextBody type={TextType.Body} textColor={Color.BrandWhite} className=" max-w-[20.938rem] md:max-w-[35rem] mx-auto " >
                        Cerveza Salta, una marca emblemática del Noroeste argentino, ha sido producida desde 1958. Con más de 60 años de tradición, ha mantenido su altísima calidad y su respetada imagen del gaucho. Hoy en día, sigue destacándose por su clásica cerveza rubia y su cerveza negra galardonada, uniendo a las personas con su sabor inigualable.
                    </TextBody>
                </TextCard>
                <img src="/images/BottomImages/BottomCurved3.png" className='w-full absolute bottom-0 z-[2] mx-[-1.25rem] lg:mx-[-6.25rem] xl:mx-[-10rem] lg:h-[27.5rem]'/>
            </Section>
            <Section height={useIsWindowSizeBellow(ScreenSize.Tablet)?72:55} align={Position.Center} imagePath="" withPaddings className={' bg-gray/900 '} childrenClassName=' space-y-10 lg:space-y-24'>
                <TextArea>
                    <Title textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem]" size={Size.Sm}>
                        ASÍ SE HACE SALTA
                    </Title>
                    <Subtitle textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem]">
                        Elaboración
                    </Subtitle>
                    <TextBody type={TextType.Body} textColor={Color.BrandWhite} className="max-w-[20.938rem] md:max-w-[37.5rem]" >
                        Con lo mejor de la provincia, desde la materia prima hasta la mano de obra.
                    </TextBody>
                </TextArea>
                <div className='flex flex-col space-y-[40px] items-center lg:items-stretch lg:flex-row justify-center lg:space-x-[60px] lg:space-y-[0px]' >
                    <ImageTextArea imagePosition={ImagePosition.Right} imagePath={'images/Us-image-1.png'}>
                        <Title textColor={Color.BrandWhite} size={Size.Xs}>
                            Productos de primera calidad
                             
                        </Title>
                        <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                            Cerveza Salta se destaca por su calidad de primera, gracias a la detallada selección de ingredientes, procesos de producción rigurosos y especial atención al sabor.
                        </TextBody>
                        <MyImage imagePath={'images/Us-image-1.png'}/>
                    </ImageTextArea>
                    <ImageTextArea imagePosition={ImagePosition.Left} imagePath={'images/Us-image-2.jpg'}>
                        <Title textColor={Color.BrandWhite} size={Size.Xs}>
                            Maestros cerveceros con experiencia
                        </Title>
                        <TextBody type={TextType.Body} textColor={Color.BrandWhite}>
                            Cerveza Salta es elaborada por hábiles maestros cerveceros que honran la tradición en cada paso. Su crecimiento continuo le permitió convertirse en una planta de producción con los más altos estándares de calidad. 
                        </TextBody>
                        <MyImage imagePath={'images/Us-image-2.jpg'} />
                    </ImageTextArea>
                </div>
            </Section>
        </>
    );
    }

export default Us;