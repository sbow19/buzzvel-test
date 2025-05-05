/*
    Image wrapper for Features slide
*/

import * as styles from './features_img.module.css'
import Image from 'next/image'

export const FeaturesImage:React.FC<{
    src: string
}> = ({
    src
})=>{
    return(
        <Image
            className={styles.wrapper}
            src={src}
            width={618}
            height={458}
            alt=""
        />
    )
}