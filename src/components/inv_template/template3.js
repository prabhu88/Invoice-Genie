import React from "react";
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import './styles/template3.css'
const styles = StyleSheet.create({
    page: { 
        backgroundColor: 'white',
        flexDirection:'column',
        width:'100%',
        height:'100%',
        padding : '10px'
        
    },
    inv_header : {
        marginTop : '5px',
        display: 'flex',
        justifyContent : 'center',
        alignItems: 'center'        
    },  
    inv_title : {
        backgroundColor: 'white',
        margin : '5px',
        fontWeight : 'bold',
        fontSize : '22pt'
    },
    inv_logo : {
        maxWidth : '100px',
        maxHeight : '100px',

    },  
    inv_section: { 
        display : 'flex',
        flexDirection : 'row',
        padding : '10px'        
    },
    inv_details : {
        
    },
    inv_source : {
        display : 'flex',
        flexDirection : 'column',
        paddingLeft : '10px',
    },
    address : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    title2 : {
        fontSize : '14pt',
        fontWeight : 'bold'
    },
    title3 : {
        fontSize : '10pt',
    }


});
const template3 = ({profile,pdfMode}) =>{
    if(pdfMode){
        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.inv_header}>
                        <Text style={styles.inv_title}>Tax Invoice</Text>
                    </View>
                    <View style={styles.inv_section}>
                        <View style={styles.inv_logo}>
                            <Image src={profile[0].logo_path}/>
                        </View>
                        <View style={styles.inv_source}>
                            <Text style={styles.title2}>{profile[0].company_name}</Text>
                            <View  style={styles.address} >
                                <Text style={styles.title3} >123 Main Street, Anytown USA</Text>
                                <Text style={styles.title3} > -123 Main Street, Anytown USA</Text>                        
                                {/* <div>{profile[0].address_line1}</div> */}                        
                            </View>
                            <View  style={styles.address} >
                                <Text style={styles.title3}>{profile[0].city}</Text>
                                <Text style={styles.title3} >{profile[0].state}</Text>
                                <Text style={styles.title3} >{profile[0].country}</Text>
                                <Text style={styles.title3} > - {profile[0].postal_code}</Text>
                            </View>
                            <View  style={styles.address} >
                                <Text style={styles.title3} >GSTIN : {profile[0].gstin}</Text>                                
                            </View>
                            <View  style={styles.address} >
                                <Text style={styles.title3} >PAN   : {profile[0].pan}</Text>
                            </View>
                        </View>
                        <View className="inv_details">
                            <div>
                                <span className="bold">Invoice No</span>
                                <span className="bold">Invoice Date</span>
                            </div>
                            <div> 
                                <span>{"INV044548"}</span>
                                <span>{"31-05-2023"}</span>
                            </div>
                        </View>
                    </View>
                </Page>
            </Document>
        )
    }
    return(
        <div className="inv_page">
            <div className="inv_header" >
                <div className="inv_title">Tax Invoice</div>                                
            </div>
            <div className="inv_section" >
                <div className="inv_logo">
                    <img src={profile[0].logo_path}/>
                </div>
                <div className="inv_source">
                    <div className="title">{profile[0].company_name}</div>
                    <div className="address">
                        <div>123 Main Street, Anytown USA</div>
                        <div> -123 Main Street, Anytown USA</div>                        
                        {/* <div>{profile[0].address_line1}</div> */}                        
                    </div>
                    <div className="address">
                        <div>{profile[0].city}</div>
                        <div>{profile[0].state}</div>
                        <div>{profile[0].country}</div>
                        <div> - {profile[0].postal_code}</div>
                    </div>
                    <div className="registers">
                        <div>GSTIN : {profile[0].gstin}</div>
                        <div>PAN   : {profile[0].pan}</div>
                    </div>
                </div>
                <div className="inv_details">
                    <div>
                        <span className="bold">Invoice No</span>
                        <span className="bold">Invoice Date</span>
                    </div>
                    <div> 
                        <span>{"INV044548"}</span>
                        <span>{"31-05-2023"}</span>
                    </div>
                </div>
            </div>
            <div className="inv_section customer_section" >
                <div className="inv_billed">
                    <div className="title2">Billed To</div>
                    <div className="b-addr1">16 45 south cross street 16 45 south cross street</div>
                    <div className="b-addr2">Base Entitiled</div>
                    <div className="b-addr3">cali-usa-45682</div>
                    <div className="b-gstin">GSTIN : {}</div>
                    <div className="b-gstin">PAN   : {}</div>
                </div>
                <div className="inv_shipped">
                    <div className="title2">Shipped To</div>
                    <div className="b-addr1">16 45 south cross street 16 45 south cross street</div>
                    <div className="b-addr2">Base Entitiled</div>
                    <div className="b-addr3">cali-usa-45682</div>
                </div>
                <div className="inv_qrcode">
                    
                </div>
            </div>
        </div>
    )
}
export default template3