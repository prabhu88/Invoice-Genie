import React,{useState} from 'react'
import InvDocument from './templateComponents/invoiceDocument'
import InvPage from './templateComponents/invoicePage'
import InvView from './templateComponents/invoiceView'
import InvImage from './templateComponents/invoiceImage'
import InvText from './templateComponents/invoiceText'
import InvInput from './templateComponents/invoiceInput'
import { Font } from "@react-pdf/renderer"
// import '../invoices/invoice_required.css'
import './styles/template1.css'
const Template1 = ({ data, pdfMode ,profile }) => {    
    const [loc_Profile,setProfile] = useState(profile)
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
    
    const handleProfileChange = (name, value) => {
        const temp_profile = {...profile}
        temp_profile[0][name] = value;            
        setProfile(temp_profile);
    };
    return(
        <InvDocument pdfMode={pdfMode} >
            <InvPage pdfMode={pdfMode}>   
                <InvView className="section" pdfMode={pdfMode} >
                    <InvView className="header" pdfMode={pdfMode} >
                        <InvView className="title center" pdfMode={pdfMode}>Tax Invoice</InvView>
                    </InvView>
                </InvView>
                <InvView className="" pdfMode={pdfMode} >
                    {
                        loc_Profile && loc_Profile[0] ? loc_Profile[0].logo_path ? (
                            <InvImage className="mt-10" image={loc_Profile[0].logo_path} height={75} width={100} pdfMode={pdfMode}/>
                        ) : <></>
                        : <></>
                    }
                    <InvView className="" pdfMode={pdfMode}>
                        <InvView className=" " pdfMode={pdfMode} >
                            <InvInput 
                                className="" 
                                pdfMode={pdfMode} 
                                value={loc_Profile[0].company_name} 
                                placeholder= "company name"
                                onChange = {(value) => handleProfileChange("company_name", value)}
                            />
                            
                            <InvView className="" pdfMode={pdfMode} >                            
                                <InvView className="" >
                                    <InvInput 
                                        className=""
                                        pdfMode={pdfMode} 
                                        value={profile[0].address_line1} 
                                        placeholder= "Address line 1"
                                        onChange = {(value) => handleProfileChange("address_line1", value)}
                                    />
                                    <InvInput 
                                        className=""
                                        pdfMode={pdfMode} 
                                        value={profile[0].address_line2} 
                                        placeholder= "Address line 1"
                                        onChange = {(value) => handleProfileChange("address_line2", value)}
                                    />
                                    <InvInput 
                                        className=""
                                        pdfMode={pdfMode} 
                                        value={profile[0].city} 
                                        placeholder= "city"
                                        onChange = {(value) => handleProfileChange("city", value)}
                                    />
                                </InvView>                                
                            </InvView>
                            <InvView className="" pdfMode={pdfMode} >                                
                                <InvInput 
                                    className=""
                                    pdfMode={pdfMode} 
                                    value={profile[0].state} 
                                    placeholder= "state"
                                    onChange = {(value) => handleProfileChange("state", value)}
                                />
                                <InvInput 
                                    className=""
                                    pdfMode={pdfMode} 
                                    value={profile[0].country} 
                                    placeholder= "country"
                                    onChange = {(value) => handleProfileChange("country", value)}
                                /> 
                                <InvInput 
                                    className=""
                                    pdfMode={pdfMode} 
                                    value={profile[0].postal_code} 
                                    placeholder= "postal_code"
                                    onChange = {(value) => handleProfileChange("postal_code", value)}
                                />
                            </InvView>  
                            <InvView className="" pdfMode={pdfMode} >
                                <InvText className="" pdfMode={pdfMode}>GSTIN:</InvText>
                                <InvInput 
                                    className=""
                                    pdfMode={pdfMode} 
                                    value={profile[0].gstin} 
                                    placeholder= "gstin"
                                    onChange = {(value) => handleProfileChange("gstin", value)}
                                />
                            </InvView>
                            <InvView  className="" pdfMode={pdfMode} >
                                <InvText className="" pdfMode={pdfMode}>PAN:</InvText>
                                <InvInput 
                                    className=""
                                    pdfMode={pdfMode} 
                                    value={profile[0].pan} 
                                    placeholder= "pan"
                                    onChange = {(value) => handleProfileChange("pan", value)}
                                />
                            </InvView>
                        </InvView>
                    </InvView>
                    
                </InvView>
            </InvPage>
        </InvDocument>
    )
}
export default Template1