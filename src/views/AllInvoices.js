import { width } from 'dom-helpers'
import React,{useState} from 'react'
import {    
    Container,
    Card, Row,Col
} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Inv_details from '../components/invoices/Inv_details'
const InvDisp = (data) => {
    console.log(data)
    return(          
        <Col xs={4} style={{minWidth:300+'px'}}>
            <Card>
                <Card.Header>
                    <Card.Title className="text-center">
                        <h4>{data.data.inv_id}</h4>
                    </Card.Title>
                </Card.Header>
            </Card>
        </Col>        
    )
}

const AllInvoices = (props) => {
    const [invoice,setInvoice] = useState([
        {
            "invoice_id": "INV001",
            "date": "12/03/2020",
            "client_name": "John Smith",
            "amount": "₹320.00",
            "status" : "pending"
          }, 
          {
            "invoice_id": "INV002",
            "date": "14/03/2020",
            "client_name": "Kate Davis",
            "amount": "₹500.00",
            "status" : "paid"
          },
          {
            "invoice_id": "INV003",
            "date": "16/03/2020",
            "client_name": "Alex Brown",
            "amount": "₹245.00",
            "status" : "refunded"
          },
          {
            "invoice_id": "INV004",
            "date": "18/03/2020",
            "client_name": "Sarah Johnson",
            "amount": "₹430.00",
            "status" : "cancelled"
          },
    ])
    return(
        <Container flex>
            <Row>            
            {
                invoice.map((e,i)=>{
                    return <Inv_details props={e} />
                })
            }
            </Row>
        </Container>
    )
}
export default AllInvoices