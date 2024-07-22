import React, { ReactNode } from 'react';
import Touple from "../../Components/Molecules/Touple";
import {AtomComponent} from "../../Enums/AtomComponent";
import { getChildByType } from '../../Helpers/GlobalHelper';

interface BeerInformationProps {
    children: ReactNode;
    imagePath : string;
    toupleInfromation: any[];
}

function BeerInformation(props: BeerInformationProps) {

    const getToupleInformation = ()=>{

        const toupleArray = Array.isArray(props.toupleInfromation) ? props.toupleInfromation : [props.toupleInfromation];

        return toupleArray.map((touple,index)=>{
            return(
                <Touple touplekey={touple.touplekey} value={touple.value} key={index}/>
            )
        })
    }

    return (
        <div className='grid lg:grid-rows-2 grid-flow-row lg:grid-flow-col w-full'>
            <div className='lg:col-span-2 lg:row-span-2 mb-6 lg:mb-0 lg:self-end lg:max-w-[32rem] mx-auto lg:mx-0'>
                {getChildByType(AtomComponent.Subtitle, props.children)}
                {getChildByType(AtomComponent.Title, props.children)}
                {getChildByType(AtomComponent.TextBody, props.children)}
            </div>
            <div className='lg:mb-[100px] order-3 lg:order-2 lg:col-span-2 space-y-8 py-10 lg:pb-0 lg:pt-12 lg:mx-0 px-5 lg:px-0 w-[-moz-available]  w-[-webkit-fill-available] w-[-fill-available] rounded-t-xl lg:max-w-[32rem] bg-[#416993] lg:bg-inherit mx-[-20px]'>
                {getToupleInformation()}
            </div>
            <img src={props.imagePath} alt="Cerveza Salta" className='order-2 lg:order-3 lg:row-span-3 lg:pl-14 max-w-[20rem] lg:max-w-[40rem] xl:max-w-[45rem] mx-auto mt-auto mb-4 lg:mb-auto'/>
        </div>
    );
    }

export default BeerInformation;