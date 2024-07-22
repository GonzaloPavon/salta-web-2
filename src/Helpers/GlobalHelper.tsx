import React, {JSXElementConstructor, ReactElement, ReactNode, useEffect, useState} from 'react';

//Consigo el tipo de hijo especifico
export const getChildByType = (childType: string, children: ReactNode) => {

    const childrenArray = Array.isArray(children) ? children : [children];

    let child = undefined;

    childrenArray.map((ch) => {
        if (typeof ch === 'object' && ch.type.componentName === childType || ch.type === childType) {
            return child = ch;
        }
    });
    return child;
}
export const getArrayChildByType = (childType: string, children: ReactNode) => {

    const childrenArray = Array.isArray(children) ? children : [children];

    const child = [] as any[];

    childrenArray.map((ch) => {
        if (typeof ch === 'object' && ch.type.componentName === childType || ch.type === childType) {
            return child.push(ch);
        }
    });
    return child;
}


export const removeChildFromChildren  = (childType: string, children: ReactNode) => {
    const childrenArray = Array.isArray(children) ? children : [children];
    return childrenArray.filter((child) => child.type.componentName != childType &&  child.type !== childType);
}


//Pregunto si existe hijo concreto para dar margenes
export const componentExists = (childType: string, children: ReactNode) => {
    return getChildByType(childType, children) !== undefined
}

export const isChildType = (childType: string, child: any) => {
    return childType === child.type.componentName;
}

//Modifica Links
export const modifiedLinks = (newFn: () => void, children: ReactNode) => {

    const childrenArray = Array.isArray(children) ? children : [children];

    const child = [] as any[];

    childrenArray.map((ch) => {
            const newChildren = Object.assign({}, ch, {
                props: Object.assign({}, ch.props, {
                    onClickFunction: newFn
                })
              });
            return child.push(newChildren);  
    });
    return child;
}

export  function useIsWindowSizeBellow(size: number) {

    const [isWindowSizeBellow, setIsWindowSizeBellow] = useState(false);
    const handleWindowSize = () => {
        setIsWindowSizeBellow(window.innerWidth <= size);
    }

    useEffect(() => {
        handleWindowSize();
        window.addEventListener('resize', handleWindowSize);

        return () => {
            window.removeEventListener('resize', handleWindowSize);
        }

    });
    return isWindowSizeBellow;
}


