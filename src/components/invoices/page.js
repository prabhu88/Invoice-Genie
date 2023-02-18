import React from 'react'
import { Page as PDFpage} from '@react-pdf/renderer'
import compose from '../styles/compose'
const Page = ({ className, pdfMode, children }) => {
    return (
      <>
        {pdfMode ? (
          <PDFpage size="A4" style={compose('page ' + (className ? className : ''))}>
            {children}
          </PDFpage>
        ) : (
          <div className={'page ' + (className ? className : '')}>{children}</div>
        )}
      </>
    )
  }
  
  export default Page