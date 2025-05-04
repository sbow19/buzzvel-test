'use client'
import { useMemo } from "react"
import * as buttonStyles from "./button_template.module.css"

export const ButtonTemplate = ({
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
        for (let style of textStyle){
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