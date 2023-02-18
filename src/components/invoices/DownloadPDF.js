import React,{useState,useEffect} from 'react'
import {PDFDownloadLink} from '@react-pdf/renderer'
import InvoiceView from './InvoiceView'
import Template1 from '../inv_template/template1'

const Download = ({data}) => {
    const [show,setShow] = useState(false)
    useEffect(() => {
        setShow(false)
        const timeout = setTimeout(() => {
          setShow(true)
        }, 500)
        return () => clearTimeout(timeout)
      }, [data])
    return(
        <div className={'download-pdf ' + (!show ? 'loading' : '')}  title="Save PDF">       
            {show && (     
                <PDFDownloadLink 
                    document = {<Template1  data={data} pdfMode={true} profile={[]}  />}
                    fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'}.pdf`}
                    aria-label="Save PDF"
                >Download</PDFDownloadLink>
            )}
        </div>
    )
}
export default Download