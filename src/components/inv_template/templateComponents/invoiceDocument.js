import React, { FC } from 'react'
import { Document as PdfDocument } from '@react-pdf/renderer'

const InvDocument = ({ pdfMode, children }) => {
  return <>{pdfMode ? <PdfDocument>{children}</PdfDocument> : <>{children}</>}</>
}

export default InvDocument