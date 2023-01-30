
import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {
    Button,
    Card,
    // Card,TabContainer,
    Tabs,
    // Tab,TabContent,Container 
} from 'react-bootstrap'
import {
    PageWrapper,
    PageHeader,
    PageHeaderTitle,
    PageHeaderActions,
    PageContent    
} from '../components/shared/Layout';
import {
    Tab,
    // Tabs,
    TabContent
} from '../components/shared/Tabs'
import Profile from "./settings/profile";
import Common from './settings/common'
import Invoice from './settings/invoice'
const UserSettings = () =>{        
    const [visibleTab,setVisibleTab] = useState(0)
    const [key, setKey] = useState('home');
    return(
        <div>
            {/* <PageHeader>
                <PageHeaderTitle>

                </PageHeaderTitle>
                <PageHeaderActions>                    
                    <Button className="" onClick={(e)=>{e.preventDefault();e.preventDefault()}}>
                        Save
                    </Button>
                </PageHeaderActions>
            </PageHeader> */}
            <Card>                
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3"
                    justify                
                >                    
                    <Tab eventKey="profile" title="Profile" onClick={(e)=>{e.preventDefault();setVisibleTab(0)}} >
                        <Profile />
                    </Tab>
                    <Tab eventKey="invoice" title="Invoice" onClick={(e)=>{e.preventDefault();setVisibleTab(1)}}>
                        <Invoice />
                    </Tab>
                    <Tab eventKey="general" title="General" href="" onClick={(e)=>{e.preventDefault();setVisibleTab(2)}}>
                        <Common />
                    </Tab>
                </Tabs>                
            </Card>
        </div>
    )
}
export default UserSettings