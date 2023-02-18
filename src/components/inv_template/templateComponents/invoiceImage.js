import React from 'react'
import {Image} from '@react-pdf/renderer'
import compose from '../styles/styleCompose'

const InvImage = ({className,image,pdfMode,width,height}) => {
    if(pdfMode){
        return(
            <Image
                style={{...compose(`image ${className ? className : ''}`), maxWidth: width |100, maxHeight :height || 'auto'}}
                src={image}
            />
        )
    }
    return(
        <div className={`image ${image ? 'mb-5' : ''} ${className ? className : ''}`}>
            <img
                src={image}
                className="image__img"                
                style={{ maxWidth: width || 100}}
            />
        </div>
    )
}
export default InvImage