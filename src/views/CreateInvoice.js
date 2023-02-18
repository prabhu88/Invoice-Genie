import React,{useState,useEffect} from "react";
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import Download from '../components/inv_template/templateComponents/invoiceDownload'
import {getProfile} from '../redux/actions/Profile'
import Swal from 'sweetalert2'
import _ from 'lodash'
import axios from 'axios'

import Template from '../components/inv_template/template1'
import Template2 from '../components/inv_template/template2'
import Template3 from '../components/inv_template/template3'
const Wrapper = styled.div`
position: relative;
border: 1px solid rgba(0, 0, 0, 0.1);
background: white;
margin-bottom: 30px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const StatusBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  border-radius: 4px 4px 0 0;
  background: #469FE5;
`;
const CreateInvoice = () => {
    const [pdfMode,setPdfMode] = useState(false)
    const dispatch = new useDispatch()
    const profile = useSelector(state => state.profile.data); 
    const [invoiceData,setInvoiceData] = useState({
        id: 1,
        date: '2022-01-01',
        customer: 'ABC Company',
        items: [
          {
            description: 'Product A',
            quantity: 2,
            price: 50.00
          },
          {
            description: 'Product B',
            quantity: 1,
            price: 75.00
          }
        ]
    })    
    useEffect(()=>{
      if(!profile[0]){
        dispatch(getProfile())
      }
    },[profile])
    if(!profile[0]){
      return(
        <div className="center">Loading</div>
      )
    }
    return(
        <Container>  
          <Download data={invoiceData} InvoicePage={Template3} profile={profile}/>
            <Col>
                <Wrapper>
                    <StatusBar/>                    
                    {/* <Template pdfMode={pdfMode} data={invoiceData} profile={profile} /> */}
                    {/* <Template2 /> */}
                    <Template3 profile={profile} pdfMode={pdfMode} />
                </Wrapper>
            </Col>
        </Container>
    )
}

export default CreateInvoice;