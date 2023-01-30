
import React, { Component } from "react"
import { useLocation, NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import logImg from '../../assets/img/inv-genie.png'
function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="#" className="simple-text logo-mini mx-1" onClick={(e)=>e.preventDefault()}>
            <div className="logo-img">              
              <img src={logImg} alt="..." />
              {/* <img src={require("../../assets/img/reactlogo.png")} alt="..." /> */}
            </div>
          </a>
          <a className="simple-text text-decoration-none" href="#" onClick={(e)=>e.preventDefault()}>
            Invoice-Genie
          </a>
        </div>
        <Nav>
          {
            routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })
          }
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;