import React,{} from 'react'
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux'
import Logo from './component/Logo.js'
const Hint = styled.p`
    margin: -15px 0 20px 0;
    font-size: 80%;
    color: grey;
`;

const Profile = () => {
    const handleLogoChange = () => {

    }
    return(
        <div>
            <div className="pageItem">
                <label className="itemLabel">Logo</label>
                <Hint>Accepts PNG,JPG & SVG (Recommended)</Hint>
                <Logo 
                    logo={''}
                    handleLogoChange = {handleLogoChange}
                />
            </div>
            <div className="row">
                <div className="pageItem col-md-6">
                    <label className="itemLabel">Fullname</label>
                    <input
                        name="fullname"
                        type="text"
                        value={''}
                        onChange={(e)=>e.preventDefault()}
                    />
                </div>
            </div>
        </div>
    )
}
export default Profile