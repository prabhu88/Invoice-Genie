import { StyleSheet } from "@react-pdf/renderer";
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
        marginLeft : '10px',
        maxWidth : '100px',
        maxHeight : '100px',

    },  
    inv_section: { 
        display : 'flex',
        flexDirection : 'row',
        padding : '10px'        
    },
    inv_details : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent :'space-between',
        marginLeft : 'auto',
        paddingRight : '10px',
        marginTop : 'auto',
        marginBottom : 'auto'
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
    },
    inv_detailsBold : {
        fontSize : '12pt',
        fontWeight : 'bold'
    },
    inv_detailsText : {
        fontSize : '12pt',        
    },
    inv_details_item : {
        display : 'flex',
        flexDirection : 'column',   
        marginLeft : '5px'  
        
    },
    customer_section : {

    },
    inv_billed : {
        display : 'flex',        
        flexDirection : 'column',
        padding : '10px',
        maxWidth : '35%',        
    },
    inv_qrcode : {
        marginLeft : 'auto',
        marginRight : '10px',
        minWidth : '2.5in',
        minHeight : '2.5in',
        border : '1px solid blue'
    },  
    prod_section : {
        display : 'flex',
        flexDirection : 'column',
        padding : '10px 10px 10px 10px',
    },
    prod_head : {
        marginLeft : '10px',
        marginRight : '10px',
        padding : '5px',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'nowrap',
        justifyContent : 'space-between',
        borderBottom : '2px solid blue',
        fontWeight : 'bold',
    },
    prod_col :{
        fontSize : '10pt'
    },
    prod_row: {
        marginLeft: '10px',
        marginRight: '10px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',        
        borderBottom : '1px solid blue',
    },
    prod_item: {
        display: 'flex',
        flexDirection: 'column',
    },
    bank_section : {
        display : 'flex',   
        flexDirection : 'column',
        flexWrap : 'nowrap',
        padding : '10px 10px 10px 10px',

    },
    signature_space : {
        marginTop : '10px',
        minHeight : '75px'
    },
    line1 : {        
        height : '5px',
        margin : '0px 20px 0px 20px',
    },
    line2 : {
        height : '3px'
    },
    line3 : {
        height : '1px'
    },
    black : {
        backgroundColor : 'black'
    },
    flexright : {
        marginLeft : 'auto',
    },
    textRight : {
        textAlign : 'right'
    },
    txtWrap : {
        flex : '1'
    },
    'b-addr1' : {
        width : '30%'
    },
    'w-200' : {
        minWidth : '200px'
    },
    'mw-200' : {
        maxWidth : '200px'
    },
    'w-50' : {
        minWidth : '50px'
    },
    'm-5' : {
        margin : '5px'
    },
    'mt-20' : {
        marginTop : '20px'
    },
    bold : {
        fontWeight : 'bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',                
    },
    col:{
        flexDirection: 'column',           
        margin : '5px'     
    }

});

export default styles