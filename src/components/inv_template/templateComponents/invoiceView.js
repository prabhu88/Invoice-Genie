import React from 'react'
import { View as PdfView } from '@react-pdf/renderer'
import compose from '../styles/styleCompose'

const InvView = ({ className, pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        <PdfView style={compose('view ' + (className ? className : ''))}>{children}</PdfView>
      ) : (
        <div className={'' + (className ? className : '')}>{children}</div>
      )}
    </>
  )
}

export default InvView
