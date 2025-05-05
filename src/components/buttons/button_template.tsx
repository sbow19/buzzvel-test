'use client'

/* 
    Attempt to create a wrapper for all buttons on site,
    which imposes some key styles such as border radius,
    width, height. Can be overridden

*/

import { useMemo } from "react"
import * as buttonStyles from "./button_template.module.css"

export const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
    onClick,
    height,
    width,
    textColor,
    backgroundColor,
    borderColor,
    text,
    textStyle
})=>{

    // Apply style classnames from parent component
    const stylesList = useMemo(()=>{
        let classString = ''
        for (const style of textStyle){
            classString += ` ${style}`
        }
        return classString
    }, [])

    return(

        <button
            onClick={onClick}
            style={{
                height: height ? height : null,
                width: width ? width : null,
                color: textColor ? textColor : null,
                backgroundColor:  backgroundColor ? backgroundColor : null,
                borderColor:  borderColor ? borderColor : null
            }}
            className={`${buttonStyles.button_template} 
            ${
                stylesList
            }`}
        >
            {text}
        </button>
    )

}