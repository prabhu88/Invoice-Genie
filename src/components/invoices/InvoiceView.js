import React, {useState} from 'react'
import { Font } from "@react-pdf/renderer";
import Document from './Document'
import EditableInput from './EditableInput'
import Page from './page'
import View from './View'
import Text from './Text'
import './invoice_required.css'

const InvoiceView = ({ data, pdfMode  }) => {
    const [invoice, setInvoice] = useState(data)        
    
    const handleInvChange = (name,value) =>{
        const newInvoice = { ...invoice };
        newInvoice[name] = value
        setInvoice(newInvoice);
    }
    Font.register({
        family: "Nunito",
        fonts: [
          { src: "https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf" },
          {
            src: "https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf",
            fontWeight: 600,
          },
        ],
    });
    return(        
        <Document pdfMode={pdfMode}>
            <Page className="invoice-wrapper" pdfMode={pdfMode}>
                <View className="flex row" pdfMode={pdfMode}>
                    <Text className="center fs-30  bold" pdfMode={pdfMode} >
                        Tax Invoice
                    </Text>
                </View>
                <View className="flex" pdfMode={pdfMode}>                    
                    <View className="w-40" pdfMode={pdfMode}>
                        <EditableInput 
                            className="fs-20 bold"
                            placeholder="Company Name"
                            value={invoice.customer}
                            onChange={(value) => handleInvChange("customer", value)}
                            pdfMode={pdfMode}
                        />
                    </View>
                    <View className="w-40" pdfMode={pdfMode}>
                        
                    </View>
                </View>
            </Page>
        </Document>          
    )
}
export default InvoiceView