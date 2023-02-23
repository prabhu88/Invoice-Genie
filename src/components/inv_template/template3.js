import React from "react";
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import QRCode from "react-qr-code";
import querystring from 'query-string'
import './styles/template3.css'
import { RsPaise } from './templateComponents/amount2word'
import styles from './template3/styles'
import { from } from "responselike";
function getCanvasElement() {
    try {
        //check nodejs env
        if (module && module.exports) {
            var Canvas = require('canvas');

            return new Canvas();
        }
        // browser env
        return document.createElement('canvas')
    } catch (e) {
        console.log('You need to specify a canvas element')
    }
}
function generateQRCodeDataUri(value) {

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    //QRCode.to
    //QRCode.toCanvas(canvas, value);
    return canvas.toDataURL('image/png');
}
// const styles = StyleSheet.create({
//     page: { 
//         backgroundColor: 'white',
//         flexDirection:'column',
//         width:'100%',
//         height:'100%',
//         padding : '10px'

//     },
//     inv_header : {
//         marginTop : '5px',
//         display: 'flex',
//         justifyContent : 'center',
//         alignItems: 'center'        
//     },  
//     inv_title : {
//         backgroundColor: 'white',
//         margin : '5px',
//         fontWeight : 'bold',
//         fontSize : '22pt'
//     },
//     inv_logo : {
//         marginLeft : '10px',
//         maxWidth : '100px',
//         maxHeight : '100px',

//     },  
//     inv_section: { 
//         display : 'flex',
//         flexDirection : 'row',
//         padding : '10px'        
//     },
//     inv_details : {
//         display : 'flex',
//         flexDirection : 'row',
//         justifyContent :'space-between',
//         marginLeft : 'auto',
//         paddingRight : '10px',
//         marginTop : 'auto',
//         marginBottom : 'auto'
//     },
//     inv_source : {
//         display : 'flex',
//         flexDirection : 'column',
//         paddingLeft : '10px',
//     },
//     address : {
//         display : 'flex',
//         flexDirection : 'row',
//         justifyContent : 'space-between'
//     },
//     title2 : {
//         fontSize : '14pt',
//         fontWeight : 'bold'
//     },
//     title3 : {        
//         fontSize : '10pt',
//     },
//     inv_detailsBold : {
//         fontSize : '12pt',
//         fontWeight : 'bold'
//     },
//     inv_detailsText : {
//         fontSize : '12pt',        
//     },
//     inv_details_item : {
//         display : 'flex',
//         flexDirection : 'column',   
//         marginLeft : '5px'  

//     },
//     customer_section : {

//     },
//     inv_billed : {
//         display : 'flex',        
//         flexDirection : 'column',
//         padding : '10px',
//         maxWidth : '35%',        
//     },
//     inv_qrcode : {
//         marginLeft : 'auto',
//         marginRight : '10px',
//         minWidth : '2.5in',
//         minHeight : '2.5in',
//         border : '1px solid blue'
//     },  
//     prod_section : {
//         display : 'flex',
//         flexDirection : 'column',
//         padding : '10px 10px 10px 10px',
//     },
//     prod_head : {
//         marginLeft : '10px',
//         marginRight : '10px',
//         padding : '5px',
//         display : 'flex',
//         flexDirection : 'row',
//         flexWrap : 'nowrap',
//         justifyContent : 'space-between',
//         borderBottom : '2px solid blue',
//         fontWeight : 'bold',
//     },
//     prod_col :{
//         fontSize : '10pt'
//     },
//     prod_row: {
//         marginLeft: '10px',
//         marginRight: '10px',
//         padding: '5px',
//         display: 'flex',
//         flexDirection: 'row',
//         flexWrap: 'nowrap',
//         justifyContent: 'space-between',        
//         borderBottom : '1px solid blue',
//     },
//     prod_item: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     bank_section : {
//         display : 'flex',   
//         flexDirection : 'column',
//         flexWrap : 'nowrap',
//         padding : '10px 10px 10px 10px',

//     },
//     signature_space : {
//         marginTop : '10px',
//         minHeight : '75px'
//     },
//     line1 : {        
//         height : '5px',
//         margin : '0px 20px 0px 20px',
//     },
//     line2 : {
//         height : '3px'
//     },
//     line3 : {
//         height : '1px'
//     },
//     black : {
//         backgroundColor : 'black'
//     },
//     flexright : {
//         marginLeft : 'auto',
//     },
//     textRight : {
//         textAlign : 'right'
//     },
//     txtWrap : {
//         flex : '1'
//     },
//     'b-addr1' : {
//         width : '30%'
//     },
//     'w-200' : {
//         minWidth : '200px'
//     },
//     'mw-200' : {
//         maxWidth : '200px'
//     },
//     'w-50' : {
//         minWidth : '50px'
//     },
//     'm-5' : {
//         margin : '5px'
//     },
//     'mt-20' : {
//         marginTop : '20px'
//     },
//     bold : {
//         fontWeight : 'bold',
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',                
//     },
//     col:{
//         flexDirection: 'column',           
//         margin : '5px'     
//     }

// });
const template3 = ({ profile, pdfMode }) => {
    //const dataUri = generateQRCodeDataUri('https://google.com');
    // const params = {
    //     'mcc': mcc,
    //     'tnxId': merchantId,
    //     'tnxAm': amount,
    //     'cu': currency,
    //     'tnxDt': new Date().toISOString(),
    //     'tnxSt': '00',
    //     'msg': 'Merchant Payment',
    //     'msgId': '1',
    //     'nt': 'A',
    //     'mpm': 'UPI',
    //     'orgId': 'OrgID',
    //     'ts': new Date().getTime(),
    //     'trm': 'ONLINE',
    //     'merchNm': merchantName,
    //     'cn': countryCode,
    // };

    // const crc = '0000'; // Example CRC
    // const encodedParams = queryString.stringify(params) + crc;
    // const uri = 'upi://pay?' + encodedParams;
    const ietm_details = [{
        "itemId": "001",
        "itemName": "Apple",
        "itemDesc": "Fresh, ripe apples from local orchard",
        "hsnCode": "0808",
        "taxRate": { "cgst": "12%", "sgst": "12%", "igst": "0%" },
        "price": 50
    },
    {
        "itemId": "002",
        "itemName": "Orange",
        "itemDesc": "Juicy, seedless oranges from Florida",
        "hsnCode": "2009",
        "taxRate": { "cgst": "9%", "sgst": "9%", "igst": "0%" },
        "price": 60
    },
    {
        "itemId": "003",
        "itemName": "Chocolate",
        "itemDesc": "Handmade dark chocolate truffles",
        "hsnCode": "1806",
        "taxRate": { "cgst": "6%", "sgst": "6%", "igst": "0%" },
        "price": 100
    },
    {
        "itemId": "004",
        "itemName": "T-shirt",
        "itemDesc": "Cotton T-shirt in various colors",
        "hsnCode": "6109",
        "taxRate": { "cgst": "6%", "sgst": "6%", "igst": "0%" },
        "price": 200
    }]
    let total_qty = 0
    let total_tax = 0
    let total_amout = 0
    if (pdfMode) {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.inv_header}>
                        <Text style={styles.inv_title}>Tax Invoice</Text>
                    </View>
                    <View style={styles.inv_section}>
                        <View style={styles.inv_logo}>
                            <Image src={profile[0].logo_path} />
                        </View>

                        <View style={styles.inv_source}>
                            <Text style={styles.title2}>{profile[0].company_name}</Text>
                            <View style={styles.address} >
                                <Text style={styles.title3} >123 Main Street, Anytown USA</Text>
                                {/* <Text style={styles.title3} > -123 Main Street, Anytown USA</Text>                         */}
                                {/* <div>{profile[0].address_line1}</div> */}
                            </View>
                            <View style={styles.address} >
                                <Text style={styles.title3} >second Line Address</Text>
                            </View>
                            <View style={styles.address} >
                                <Text style={styles.title3}>{profile[0].city}</Text>
                                <Text style={styles.title3} >, {profile[0].state}</Text>
                                <Text style={styles.title3} >, {profile[0].country}</Text>
                                <Text style={styles.title3} > - {profile[0].postal_code}</Text>
                            </View>
                            <View style={styles.address} >
                                <Text style={styles.title3} >GSTIN : {profile[0].gstin}</Text>
                            </View>
                            <View style={styles.address} >
                                <Text style={styles.title3} >PAN   : {profile[0].pan}</Text>
                            </View>
                        </View>
                        <View style={styles.inv_details}>
                            <View style={styles.inv_details_item} >
                                <Text style={styles.inv_detailsBold}>Invoice No</Text>
                                <Text style={styles.inv_detailsBold}>Invoice Date</Text>
                                <Text style={styles.inv_detailsBold}>Due Date</Text>
                            </View>
                            <View style={styles.inv_details_item}>
                                <Text style={styles.inv_detailsText} >{"INV044548"}</Text>
                                <Text style={styles.inv_detailsText} >{"31-05-2023"}</Text>
                                <Text style={styles.inv_detailsText} >{"5-06-2023"}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.line1, styles.black]}></View>
                    <View style={[styles.inv_section, styles.customer_section]}>
                        <View style={styles.inv_billed} className="inv_billed">
                            <Text style={styles.title2} >Billed To</Text>
                            <Text style={styles.title3}>16 45 south cross street 16 45 south cross street</Text>
                            <Text style={styles.title3}>Base Entitiled</Text>
                            <Text style={styles.title3}>cali-usa-45682</Text>
                            <Text style={styles.title3}>GSTIN : { }</Text>
                            <Text style={styles.title3}>PAN   : { }</Text>
                        </View>
                        <View style={styles.inv_billed} className="inv_billed">
                            <Text style={styles.title2} >Shipped To</Text>
                            <Text style={styles.title3}>16 45 south cross street 16 45 south cross street</Text>
                            <Text style={styles.title3}>Base Entitiled</Text>
                            <Text style={styles.title3}>cali-usa-45682</Text>
                        </View>
                        <View style={styles.inv_qrcode} className="inv_qrcode">
                            {/* <Image src={uri} /> */}
                        </View>
                    </View>
                    <View style={[styles.line1, styles.black]}></View>
                    <View style={styles.prod_section} >
                        <View style={styles.prod_head}>
                            <Text style={[styles.prod_col, styles['w-200']]} >ITEMS</Text>
                            <Text style={[styles.prod_col, styles['w-50']]} >HSN</Text>
                            <Text style={[styles.prod_col, styles['w-50']]} >QTY</Text>
                            <Text style={[styles.prod_col, styles['w-50']]} >RATE</Text>
                            <Text style={[styles.prod_col, styles['w-50']]} >TAX</Text>
                            <Text style={[styles.prod_col,]}>AMOUNT</Text>
                        </View>
                        {
                            ietm_details.map(item => {
                                let quantity = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                                let cgst = parseFloat(item.taxRate.cgst) / 100 * (quantity * item.price);
                                let sgst = parseFloat(item.taxRate.sgst) / 100 * (quantity * item.price);
                                let igst = parseFloat(item.taxRate.igst) / 100 * (quantity * item.price);
                                let tax = cgst + sgst + igst;
                                let total = tax + quantity * item.price;
                                total_qty += quantity
                                total_tax += tax
                                total_amout += total
                                total = total.toFixed(2)
                                tax = tax.toFixed(2);
                                return (
                                    <View style={styles.prod_row}>
                                        <View style={[styles.prod_col, styles['w-200'], styles.prod_item]}>
                                            <Text>{item.itemName}</Text>
                                            <Text>{item.itemDesc}</Text>
                                        </View>
                                        <Text style={[styles.prod_col, styles['w-50']]} >{item.hsnCode}</Text>
                                        <Text style={[styles.prod_col, styles['w-50']]} >{quantity}</Text>
                                        <Text style={[styles.prod_col, styles['w-50']]} >{item.price}</Text>
                                        <Text style={[styles.prod_col, styles['w-50']]} >{tax}</Text>
                                        <Text style={[styles.prod_col,]} >{total}</Text>
                                    </View>
                                )
                            })
                        }
                        <View style={[styles.prod_head, styles['mt-20']]} className="prod_head mt-20">
                            <Text style={[styles.prod_col, styles['w-200']]}>SUB TOTAL</Text>
                            <Text style={[styles.prod_col, styles['w-50']]}></Text>
                            <Text style={[styles.prod_col, styles['w-50']]}>{total_qty}</Text>
                            <Text style={[styles.prod_col, styles['w-50']]}></Text>
                            <Text style={[styles.prod_col, styles['w-50']]}>{total_tax.toFixed(2)}</Text>
                            <Text style={[styles.prod_col,]}>{total_amout.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View style={styles.inv_section}>
                        <View style={[styles.bank_section, styles['wp-50']]} >
                            <Text style={[styles.title2, styles.bold, styles['m-5']]}>BANK DETAILS</Text>
                            <View style={styles.row}>
                                <View style={[styles.col, styles['wp-50']]} >
                                    <Text style={[styles.title3, styles.bold]}>Name</Text>
                                    <Text style={[styles.title3, styles.bold]}>IFFC Code</Text>
                                    <Text style={[styles.title3, styles.bold]}>Account no</Text>
                                    <Text style={[styles.title3, styles.bold]}>Bank</Text>
                                </View>
                                <View style={[styles.col, styles['wp-200']]}>
                                    <Text style={styles.title3}>S. Prabhu  </Text>
                                    <Text style={styles.title3}>KKBK25486G</Text>
                                    <Text style={styles.title3}>9994040005</Text>
                                    <Text style={styles.title3}>Ketkran Mekraon Bank</Text>
                                </View>
                            </View>
                            <Text style={[styles.title3, styles.bold, styles['mt-20']]}>TERMS AND CONDITIONS:</Text>
                            <Text style={[styles.title3, styles.bold, styles['wp-200']]}>1. Goods once sold will not be taken back or exchanged</Text>
                            <Text style={[styles.title3, styles.bold, styles['wp-200']]}>2. All disputes are subject to madurai jurisdiction only</Text>
                            <Text style={[styles.title3, styles.bold, styles['wp-200']]}>3. 100% advance payment against po</Text>
                        </View>
                        <View style={[styles.bank_section, styles['wp-50'], styles.flexright]} >
                            <View style={styles.row}>
                                <View style={[styles.col, styles['wp-50']]} >
                                    <Text style={[styles.title3, styles.bold]}>TAXABLE AMOUNT</Text>
                                    <Text style={[styles.title3, styles.bold]}>CGST</Text>
                                    <Text style={[styles.title3, styles.bold]}>SGST</Text>
                                    <Text style={[styles.title3, styles.bold]}>IGST</Text>
                                </View>
                                <View style={[styles['wp-200'], styles.col]}>
                                    <Text style={[styles.title3, styles.flexright, styles.textRight]}>{(total_amout - total_tax).toFixed(2)}</Text>
                                    <Text style={[styles.title3, styles.flexright, styles.textRight]}>{(total_tax / 2).toFixed(2)}</Text>
                                    <Text style={[styles.title3, styles.flexright, styles.textRight]}>{(total_tax / 2).toFixed(2)}</Text>
                                    <Text style={[styles.title3, styles.flexright, styles.textRight]}>{0}</Text>
                                </View>
                            </View>
                            <View style={[styles.line2, styles.black]}></View>
                            <View style={styles.row}>
                                <View style={[styles.col, styles['wp-50']]} >
                                    <Text style={[styles.title3, styles.bold]}>GRAND TOTAL</Text>
                                </View>
                                <View style={[styles['wp-200'], styles.col]}>
                                    <Text style={[styles.title3, styles.bold]}>{total_amout.toFixed(2)}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={[styles['wp-50'],]}>
                                    <Text style={[styles.title3, styles.bold]}>TOTAL AMOUNT IN WORDS : </Text>
                                    <Text style={[styles.title3, styles.bold, styles['mw-200'], styles.flexright]}>{RsPaise(total_amout.toFixed(2))}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.signature_space} />
                                <View style={[styles['wp-200'], styles.col]}>
                                    <Text style={[styles.title3, styles.bold, , styles.flexright]}>AUTHORISED SIGNATORY FOR</Text>
                                    <Text style={[styles.title3, styles.bold, styles.flexright]}>{profile[0].company_name}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        )
    }
    
    return (
        <div className="inv_page">
            <div className="inv_header" >
                <div className="inv_title">Tax Invoice</div>
            </div>
            <div className="inv_section" >
                <div className="inv_logo">
                    <img src={profile[0].logo_path} />
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
                        <span className="bold">Due Date</span>
                    </div>
                    <div>
                        <span>{"INV044548"}</span>
                        <span>{"31-05-2023"}</span>
                        <span>{"06-06-2023"}</span>
                    </div>
                </div>
            </div>
            <div className="line1 black"></div>
            <div className="inv_section customer_section" >
                <div className="inv_billed">
                    <div className="title2">Billed To</div>
                    <div className="b-addr1">16 45 south cross street 16 45 south cross street</div>
                    <div className="b-addr2">Base Entitiled</div>
                    <div className="b-addr3">cali-usa-45682</div>
                    <div className="b-gstin">GSTIN : { }</div>
                    <div className="b-gstin">PAN   : { }</div>
                </div>
                <div className="inv_shipped">
                    <div className="title2">Shipped To</div>
                    <div className="b-addr1">16 45 south cross street 16 45 south cross street</div>
                    <div className="b-addr2">Base Entitiled</div>
                    <div className="b-addr3">cali-usa-45682</div>
                </div>
                <div className="inv_qrcode">
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        viewBox={`0 0 256 256`}
                        value="www.google.com"
                    />
                </div>
            </div>
            <div className="prod_section">
                <div className="prod_head">
                    <div className="prod_col w-200">ITEMS</div>
                    <div className="prod_col w-50">HSN</div>
                    <div className="prod_col w-50">QTY</div>
                    <div className="prod_col w-50">RATE</div>
                    <div className="prod_col w-50">TAX</div>
                    <div className="prod_col ">AMOUNT</div>
                </div>
                {
                    ietm_details.map(item => {
                        let quantity = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                        let cgst = parseFloat(item.taxRate.cgst) / 100 * (quantity * item.price);
                        let sgst = parseFloat(item.taxRate.sgst) / 100 * (quantity * item.price);
                        let igst = parseFloat(item.taxRate.igst) / 100 * (quantity * item.price);
                        let tax = cgst + sgst + igst;
                        let total = tax + quantity * item.price;
                        total_qty += quantity
                        total_tax += tax
                        total_amout += total
                        total = total.toFixed(2)
                        tax = tax.toFixed(2);
                        return (
                            <div className="prod_row">
                                <div className="prod_col w-200 prod_item left">
                                    <div>{item.itemName}</div>
                                    <div>{item.itemDesc}</div>
                                </div>
                                <div className="prod_col w-50">{item.hsnCode}</div>
                                <div className="prod_col w-50">{quantity}</div>
                                <div className="prod_col w-50">{item.price}</div>
                                <div className="prod_col w-50">{tax}</div>
                                <div className="prod_col mw-50">{total}</div>
                            </div>
                        )
                    })
                }
                <div className="prod_head mt-20">
                    <div className="prod_col w-200">SUB TOTAL</div>
                    <div className="prod_col w-50"></div>
                    <div className="prod_col w-50">{total_qty}</div>
                    <div className="prod_col w-50"></div>
                    <div className="prod_col w-50">{total_tax.toFixed(2)}</div>
                    <div className="prod_col ">{total_amout.toFixed(2)}</div>
                </div>
            </div>
            <div className="inv_section" >
                <div className="bank_section wp-50 ">
                    <div className="title3 bold">BANK DETAILS</div>
                    <div className="row">
                        <div className="col">
                            <div>name</div>
                            <div>iffc code</div>
                            <div>account no</div>
                            <div>Bank</div>
                        </div>
                        <div className="col  w-200">
                            <div>S. Prabhu  </div>
                            <div>KKBK25486G</div>
                            <div>9994040005</div>
                            <div>Ketkran Mekraon Bank</div>
                        </div>
                    </div>
                    <div className="title3 bold mt-20">TERMS AND CONDITIONS:</div>
                    <div className="">1. Goods once sold will not be taken back or exchanged</div>
                    <div className="">2. All disputes are subject to madurai jurisdiction only</div>
                    <div className="">3. 100% advance payment against po</div>
                </div>
                <div className="bank_section wp-50 flexright">
                    <div className="row">
                        <div className="col">
                            <div>TAXABLE AMOUNT</div>
                            <div>CGST</div>
                            <div>SGST</div>
                            <div>IGST</div>
                        </div>
                        <div className="col w-200 flexright">
                            <div className="flexright right">{(total_amout - total_tax).toFixed(2)}</div>
                            <div className="flexright right">{(total_tax / 2).toFixed(2)}</div>
                            <div className="flexright right">{(total_tax / 2).toFixed(2)}</div>
                            <div className="flexright right">{ }</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col bold">
                            GRAND TOTAL
                        </div>
                        <div className="col flexright right">
                            {total_amout.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col flexright bold ">
                            TOTAL AMOUNT IN WORDS
                        </div>
                    </div>
                    <div className="row">
                        <div className="col flexright">
                            {RsPaise(total_amout.toFixed(2))}
                        </div>
                    </div>
                    <div className="signature_space">

                    </div>
                    <div className="row">
                        <div className="col flexright right ">
                            AUTHORISED SIGNATORY FOR
                        </div>
                    </div>
                    <div className="row">
                        <div className="col flexright right ">
                            {profile[0].company_name}
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="line1 black"></div> */}
        </div>
    )
}
export default template3