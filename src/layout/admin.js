import React, { Component,useState,useEffect, useRef } from "react";
import { useLocation, Route, Switch,useHistory } from "react-router-dom";
import Header_Nav from '../components/navbar/Header_Nav';
import Sidebar_plugins from '../components/plugins/sidebar_plugins';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes'
import side_bak from '../assets/img/sidebar-3.jpg'
const Admin = (props) =>{    
    const {isLoggedIn} = useSelector(state => state.auth)
    const navigate = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
      if(!isLoggedIn){
          navigate.push('login')
      }      
  },[isLoggedIn])
    const [image,setImage] = useState('')
    const [color,setColor] = useState('blue')
    const [hasImage, setHasImage] = useState(side_bak)
    const location = useLocation()
    const mainPanel = useRef(null)
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={(props) => <prop.component {...props} />}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
    };
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
          window.innerWidth < 993 &&
          document.documentElement.className.indexOf("nav-open") !== -1
        ) {
          document.documentElement.classList.toggle("nav-open");
          var element = document.getElementById("bodyClick");
          element.parentNode.removeChild(element);
        }
      }, [location])
    return(
        <>
            <div className="wrapper">                              
                <Sidebar routes={routes} image={hasImage} color={color}/>
                <div className="main-panel" ref={mainPanel}>
                    <Header_Nav/>                    
                    <div className="content">
                        <Switch>
                            {getRoutes(routes)}
                        </Switch>
                    </div>
                </div>
            </div>
            <Sidebar_plugins
                hasImage={hasImage}
                setHasImage={() => setHasImage(!hasImage)}
                color={color}
                setColor={(color) => setColor(color)}
                image={image}
                setImage={(image) => setImage(image)}
            />
        </>
    )
}

export default Admin