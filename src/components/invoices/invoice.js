import React,{useState} from 'react'
import Document from './Document'
import Page from './page'
import View from './View'
import EditableInput from './EditableInput'
const InvoicePage = ({ data, pdfMode }) =>{
    const [invoice, setInvoice] = useState(data)
    const handleChange = (name,value) =>{
        const newInvoice = { ...invoice };
        newInvoice[name] = value
        setInvoice(newInvoice);
    }
    return(
        <Document pdfMode={pdfMode}>
            <Page className="invoice-wrapper" pdfMode={pdfMode}>
                <View className="flex" pdfMode={pdfMode}>
                    <View className="w-50" pdfMode={pdfMode}>
                        <EditableInput 
                            className="fs-20 bold"
                            placeholder="Your Company"
                            value={invoice.companyName}
                            onChange={(value) => handleChange("companyName", value)}
                            pdfMode={pdfMode}
                        />
                    </View>
                    <View className="w-50" pdfMode={pdfMode}></View>
                </View>
            </Page>
        </Document>
    )
}
export default InvoicePage