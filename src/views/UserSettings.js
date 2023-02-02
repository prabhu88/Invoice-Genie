
import React,{useState,useRef} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import { from } from "mute-stream";
const UserSettings = (props) =>{        
    const [visibleTab,setVisibleTab] = useState(0)
    const [key, setKey] = useState('home');
    const [formData,setFormData] = useState({
        company_name : '',        address_line1 : '',        address_line2 : '',
        city : '',        state : '',        country : '',        zipcode : '',
        mobile : '',        email : '',        gstin : '',        pan : '',
        terms : ''
    })
    const formSumit = (e) => {
        e.preventDefault();
        
    }
    return(
        <div>            
            <Container>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Edit Profile</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <Form.Group>
                                                <label>Company Name</label>
                                                <Form.Control
                                                defaultValue=""                                                
                                                placeholder="Company"
                                                type="text"
                                                onChange={(e)=>{
                                                    setFormData({...formData,
                                                        company_name :e.target.value
                                                    })
                                                }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>                                        
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <Form.Group>
                                                <label>Address</label>
                                                <Form.Control
                                                    defaultValue={formData.address_line1}
                                                    placeholder="Address Line 1"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setFormData({...formData,
                                                            address_line1 :e.target.value
                                                        })
                                                    }}
                                                ></Form.Control>
                                                <Form.Control
                                                    defaultValue={formData.address_line2}
                                                    placeholder="Address Line 2"
                                                    className="mt-2"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setFormData({...formData,
                                                            address_line2 :e.target.value
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>                                        
                                        <Col className="pr-1" md="3">
                                            <label>City</label>
                                            <Form.Control
                                                defaultValue={formData.city}                                                
                                                placeholder="City"
                                                type="text"
                                                onChange={(e)=>{
                                                    setFormData({...formData,
                                                        city :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                        <Col className="pr-1" md="3">
                                            <label>State</label>
                                            <Form.Control
                                                defaultValue={formData.state}                                                
                                                placeholder="State address"
                                                type="text"
                                                onChange={(e)=>{
                                                    setFormData({...formData,
                                                        state :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                        <Col className="pr-1" md="3">
                                            <label>Country</label>
                                            <Form.Control
                                                defaultValue={formData.country}                                                
                                                placeholder="Country"
                                                type="text"
                                                onChange={(e)=>{
                                                    setFormData({...formData,
                                                        country :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                        <Col className="pr-1" md="3">
                                            <label>Postal Code</label>
                                            <Form.Control
                                                defaultValue={formData.zipcode}                                                
                                                placeholder="Postal Code"
                                                type="text"
                                                onChange={(e)=>{
                                                    setFormData({...formData,
                                                        zipcode :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Mobile number</label>
                                                <Form.Control
                                                    defaultValue={formData.mobile}
                                                    placeholder="Mobile Number"
                                                    type="number"
                                                    onChange={(e)=>{
                                                        setFormData({...formData,
                                                            mobile :e.target.value
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Email Address</label>
                                                <Form.Control
                                                    defaultValue={formData.email}
                                                    placeholder="Email Address"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setFormData({...formData,
                                                            email :e.target.value
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>GSTIN</label>
                                                <Form.Control
                                                    defaultValue={formData.gstin}
                                                    value = {formData.gstin}
                                                    placeholder="GSTIN Number"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setFormData({...formData,
                                                            gstin :e.target.value.substring(0,15).toUpperCase(),
                                                            pan : e.target.value.substring(2,12).toUpperCase()
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>PAN</label>
                                                <Form.Control
                                                    defaultValue={formData.pan}
                                                    placeholder="PAN"
                                                    type="text"
                                                    disabled                                                    
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Terms & conditions</label>
                                                <Form.Control
                                                    cols="80"
                                                    defaultValue=""
                                                    placeholder="Here can be your description"
                                                    rows="4"
                                                    as="textarea"
                                                    onChange={(e)=>{
                                                        setFormData({...formData,
                                                            terms :e.target.value                                                    
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                        onClick={formSumit}
                                    >
                                        Update Profile
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">

                    </Col>
                </Row>
                <h1>{formData.pan}</h1> 
            </Container>          
        </div>
    )
}
export default UserSettings