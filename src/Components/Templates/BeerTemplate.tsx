import React, { ReactNode, useEffect, useState } from 'react';
import {useLocation, useParams} from "react-router-dom";
import {ScreenSize} from "../../Enums/ScreenSize";
import {Size} from "../../Enums/Size";
import {Color} from "../../Enums/Color";
import {useIsWindowSizeBellow} from "../../Helpers/GlobalHelper";

import ProductsJson from "../../FillTexts/ProductList"

import ActionTittle from '../../Components/Molecules/ActionTittle';
import Button, {ButtonType} from "../../Components/Atoms/Button";
import DrivingResponsibilityCard from '../../Components/Molecules/DrivingResponsibilityCard';
import TextArea from '../../Components/Molecules/TextArea';
import Section, {Position}  from '../../Components/Organisms/Section';
import BeerInformation from '../../Components/Organisms/BeerInformation';
import Title from '../../Components/Atoms/Title';
import TextBody, {TextType} from "../../Components/Atoms/TextBody";
import Subtitle from "../../Components/Atoms/Subtitle";

function BeerTemplate() {

    const [specialSection, setSpecialSection] = useState(false);
    const [heightSpecialSection, setHeightSpecialSection] = useState();
    const {pathname} = useLocation();
    const params = useParams();

    const beer = ProductsJson.find(beer => beer.idName === params.id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (beer && beer.specialSection === true) {
            setSpecialSection(true)
        }
        else{
            setSpecialSection(false)
        }
    }, [pathname]);

    const isWindowSizeBelow = useIsWindowSizeBellow(ScreenSize.Tablet);

    const testClass = '';

    const secondSectionHeigth = (useIsWindowSizeBellow(ScreenSize.Tablet)?70:60);
    const secondSectionHeigthSpecial = 45;

    return (
        <div className='pt-[84px] xl:pt-[0px] bg-[#101828]'>
            <Section    height={65} align={Position.Bottom} imagePath='' withPaddings={true} className=' bg-[#101828] text-white'>
                <BeerInformation toupleInfromation={beer?beer.dataSheet.toupleInformation:['','','']} imagePath={beer?beer.image:''}>
                    <Title textColor={Color.BrandWhite} className="mb-4 lg:mb-6 text-center lg:text-left" size={Size.Xl}>
                        {beer?beer.dataSheet.title:''}
                    </Title>
                    <TextBody type={TextType.Hero} textColor={Color.BrandWhite} className="text-center lg:text-left">
                        {beer?beer.dataSheet.description:''}
                    </TextBody>
                    <Subtitle textColor={Color.BrandWhite} className="mb-4 text-center lg:text-left">
                        Variedades
                    </Subtitle>
                </BeerInformation>
            </Section>
            <Section    height={specialSection?secondSectionHeigth:secondSectionHeigthSpecial} align={Position.Center} imagePath='' withPaddings={true} className=' bg-brand/blue'>
                <div className={specialSection?'mb-[3rem] lg:mb-[6.25rem]':''}>
                    {specialSection?
                        <TextArea>
                            <Title textColor={Color.BrandWhite} className=" max-w-[37.5rem]" size={Size.Sm}>
                                {beer?beer.specialSectionTitle+'':''}
                            </Title>
                            <TextBody type={TextType.Body} textColor={Color.BrandWhite} className=' max-w-[37.5rem] '>
                                {beer?beer.specialSectionText+'':''}
                            </TextBody>
                        </TextArea>:''
                    }
                </div>
                <DrivingResponsibilityCard imagePath={beer?.drivingCardImage}>
                    <Title textColor={Color.BrandWhite} size={Size.Sm} className='max-w-[35rem]'>
                        Si tomaste, no manejes
                    </Title>
                    <TextBody type={TextType.Body} textColor={Color.BrandWhite} className="mt-3 max-w-[35rem]">
                        {'Consumo responsable.' 
                        +'<br/>Cuidemosnos y cuidemos a nuestro entorno, tomando decisiones conscientes del impacto de nuestras acciones tanto en el presente como en el futuro.'
                        +'<br/><br/>Si manejás, alcohol cero. Pasa las llaves y elige la seguridad.'}
                    </TextBody>
                    <Subtitle textColor={Color.BrandWhite} className="mb-4 max-w-[35rem]">
                        Disfrutá responsablemente
                    </Subtitle>
                </DrivingResponsibilityCard>
                <img src="/images/BottomImages/BottomCurved2.png" className='w-full absolute bottom-0 z-[2] mx-[-1.25rem] lg:mx-[-6.25rem] xl:mx-[-10rem]'/>
            </Section>
            <Section    height={40} align={Position.Center} imagePath={beer?.bannerImage} withPaddings={true} className=' bg-brand/dark  bg-center'>
                <ActionTittle rightAlign={true}>
                    <Title textColor={Color.BrandWhite} size={Size.Xl} className='max-w-[37.5rem]'>
                        
                        Una cerveza única en toda la argentina
                    </Title>
                </ActionTittle>
            </Section>
        </div>
    );
    }

export default BeerTemplate;