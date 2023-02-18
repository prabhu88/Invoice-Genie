import React, { FC } from 'react'
import { Text as PdfText } from '@react-pdf/renderer'
import compose from '../styles/styleCompose'
const InvText = ({ className, pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        <PdfText style={compose(' ' + (className ? className : ''))}>{children}</PdfText>
      ) : (
        <span className={' ' + (className ? className : '')}>{children}</span>
      )}
    </>
  )
}

export default InvText
