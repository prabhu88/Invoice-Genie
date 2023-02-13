import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import _ from 'lodash'
import axios from 'axios'

const CreateInvoice = () => {
    return(
        <Container>
            <h1>Create Invoice</h1>
        </Container>
    )
}

export default CreateInvoice;