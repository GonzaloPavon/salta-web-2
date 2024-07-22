import React, {ReactNode, useState, useEffect} from 'react';
import {AtomComponent} from "../../Enums/AtomComponent";
import {isChildType} from "../../Helpers/GlobalHelper";
import {MoleculeComponent} from "../../Enums/MoleculeComponent";

interface SiteMapLinksProps {
    children: ReactNode;
}

function SiteMapLinks(props: SiteMapLinksProps) {

    const [linksCols, setLinksCols] = useState({firstCol: [undefined], secondCol: [undefined]});

    const generateColumns = () => {

        const childrenArray = Array.isArray(props.children) ? props.children : [props.children];
        const rowsPerColumn = childrenArray.length / 2;

        const firstColChildren = new Array(undefined);
        const secondColChildren = new Array(undefined);

        childrenArray.map((child, key) => {
            if (typeof child === 'object' && isChildType(AtomComponent.GeneralLink, child)) {
                if (key < rowsPerColumn) {
                    firstColChildren.push(child);
                } else {
                    secondColChildren.push(child);
                }
            }
        });
        setLinksCols({firstCol: firstColChildren, secondCol: secondColChildren});
    }

    useEffect(() => {
        generateColumns();
    }, []);

    return (
        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-[10.813rem]'>
            {Object.keys(linksCols).map((key, i) => (
                <div className='flex flex-col space-y-8 md:space-y-10 items-center md:items-start'
                     key={i}>{linksCols[key as keyof typeof linksCols]}</div>
            ))}
        </div>
    );
}
SiteMapLinks.componentName = MoleculeComponent.SiteMapLinks;
export default SiteMapLinks; 