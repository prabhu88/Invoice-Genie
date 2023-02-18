
import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import {getProfile,setProfile} from '../redux/actions/Profile'
import Swal from 'sweetalert2'
import _ from 'lodash'
import axios from 'axios'
//import CmpnyLogo from '../assets/img/faces/face-1.jpg'
const baseURL = process.env.REACT_APP_PRODUCTION_AUTH_URL ? process.env.REACT_APP_DEVELOPEMENT_AUTH_URL : 'http://localhost:3011/auth/';

const updatedValues = (oldObj, newObj) => {
    let result = {};
    for (let key in oldObj) {
        if (newObj[key] !== oldObj[key]) {
            result[key] = newObj[key]
        }
    }
    return result;
}

const UserSettings = (props) => {            
    const _default = useSelector(state => state.profile);    
    const data = useSelector(state => state.profile.data);
    const loading = useSelector(state => state.profile.loading);
    const error = useSelector(state => state.profile.error);
    let initialRender=true;
    const [logofile, setLogofile] = useState('assets/img/faces/face-1.jpg');
    
    const dispatch = useDispatch()
    const [profileData,setProfileData] = useState({
        company_name : '',        address_line1 : '',        address_line2 : '',
        city : '',        state : '',        country : '',        postal_code : '',
        mobile_momber : '',        email : '',        gstin : '',        pan : '',
        terms : '', image : "../assets/img/faces/face-1.jpg"
    })
    useEffect(()=>{  
        if(loading){
            dispatch(getProfile())                
        }
        else{            
            setProfileData(data[0])
            setLogofile(data[0].logo_path)
        }     
           
    },[loading,data])
    
    const formSumit = (e) => {
        e.preventDefault();
        let updatedValue = updatedValues(data[0],profileData)               
        if(Object.keys(updatedValue).length > 0 ){
            Swal.fire({
                title: 'Do you want to save the changes?',            
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {            
                if (result.isConfirmed) {
                    dispatch(setProfile(updatedValue))
                    Swal.fire('Details Updated Successfully','','success')
    
                } else if (result.isDenied) {                    
                  Swal.fire('Changes are not saved', '', 'info')
                }            
            })
        }
        else{
            Swal.fire('nothing to change', '', 'info')
        }
    }
    const imgChange = (e) => {
        e.preventDefault()
        var allowedExtensions =/(\.jpg|\.jpeg|\.png)$/i;        
        let file_name = e.target.files[0].name
        if(!allowedExtensions.exec(file_name)){
            Swal.fire('Please select jpg image')
            return false;
        }        
        let fd = new FormData()
        fd.append('logo',e.target.files[0])
        fd.append('filename',file_name)
        setLogofile(URL.createObjectURL(e.target.files[0]));                
        axios.post(baseURL+"updateLogo",fd)
        .then(res => {
            console.log(res)
            if (!res.data.error_state){
                Swal.fire('company logo updated successfully')
            }
        })
        .catch(err =>{
            Swal.fire('',err,'info')            
        }) 

    }
    if(loading){
        return(
            <Container>
                <Row className="vh-100 align-center">
                    <Col className="text-center">
                    Loading..
                    </Col>
                </Row>                
            </Container>
        )
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
                                                value = {profileData.company_name}                                                
                                                placeholder="Company"
                                                type="text"
                                                onChange={(e)=>{
                                                    setProfileData({...profileData,
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
                                                    value={profileData.address_line1}
                                                    placeholder="Address Line 1"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setProfileData({...profileData,
                                                            address_line1 :e.target.value
                                                        })
                                                    }}
                                                ></Form.Control>
                                                <Form.Control
                                                    value={profileData.address_line2}
                                                    placeholder="Address Line 2"
                                                    className="mt-2"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setProfileData({...profileData,
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
                                                defaultValue={profileData.city}                                                
                                                placeholder="City"
                                                type="text"
                                                onChange={(e)=>{
                                                    setProfileData({...profileData,
                                                        city :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                        <Col className="pr-1" md="3">
                                            <label>State</label>
                                            <Form.Control
                                                value={profileData.state}                                                
                                                placeholder="State address"
                                                type="text"
                                                onChange={(e)=>{
                                                    setProfileData({...profileData,
                                                        state :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                        <Col className="pr-1" md="3">
                                            <label>Country</label>
                                            <Form.Control
                                                value={profileData.country}                                                
                                                placeholder="Country"
                                                type="text"
                                                onChange={(e)=>{
                                                    setProfileData({...profileData,
                                                        country :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                        <Col className="pr-1" md="3">
                                            <label>Postal Code</label>
                                            <Form.Control
                                                value={profileData.postal_code}                                                
                                                placeholder="Postal Code"
                                                type="text"
                                                onChange={(e)=>{
                                                    setProfileData({...profileData,
                                                        postal_code :e.target.value
                                                    })
                                                }}
                                            ></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>mobile_momber number</label>
                                                <Form.Control
                                                    value={profileData.mobile_momber}
                                                    placeholder="mobile_momber Number"
                                                    type="number"
                                                    onChange={(e)=>{
                                                        setProfileData({...profileData,
                                                            mobile_momber :e.target.value
                                                        })
                                                    }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Email Address</label>
                                                <Form.Control
                                                    value={profileData.email}
                                                    placeholder="Email Address"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setProfileData({...profileData,
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
                                                    value = {profileData.gstin}
                                                    placeholder="GSTIN Number"
                                                    type="text"
                                                    onChange={(e)=>{
                                                        setProfileData({...profileData,
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
                                                    value={profileData.pan}
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
                                                    value={profileData.terms}
                                                    placeholder="Here can be your description"
                                                    rows="4"
                                                    as="textarea"
                                                    onChange={(e)=>{
                                                        setProfileData({...profileData,
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
                        <Card className="card-user">
                            <div className="card-image">
                                <img                                                                
                                    src={profileData.image}
                                ></img>
                            </div>
                            <Card.Body>
                                <div>
                                    
                                </div>
                                <div className="author">                                    
                                    <input type="file" hidden id='selectImage' accept="image/*" value=""  onChange={imgChange} />
                                    <a href="#pablo" onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("selectImage").click()
                                        }}>
                                        <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={logofile}
                                        >                                            
                                        </img>
                                        <h5 className="title">Company Logo</h5>
                                    </a>
                                    <p className="description"></p>
                                </div>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>                
            </Container>          
        </div>
    )
}
export default UserSettings