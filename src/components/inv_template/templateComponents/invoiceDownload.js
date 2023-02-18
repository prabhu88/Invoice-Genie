import React, {useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from 'styled-components'
import downlodImage from '../../../assets/images/download_icon.png'
const download_pdf = styled.div`
    position: fixed;
    top: 100px;
    margin-left: -50px;
    width: 40px;
    height: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: url(${downlodImage});
    transition: opacity 0.2s ease-in-out;    
`;
const Download = ({ data ,InvoicePage,profile}) => {      
  return (
    <download_pdf>      
        <PDFDownloadLink
          document={<InvoicePage pdfMode={true} data={data} profile={profile}  />}
          fileName={`${"invoice"}.pdf`}
          aria-label="Save PDF"
        >
            {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      } 
        </PDFDownloadLink>
      
    </download_pdf>
  );
};
export default Download;
