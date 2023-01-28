import React,{Component,Suspense} from "react";
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/store'
import App from "./app.js";
import './assets/css/animate.min.css'
import './assets/css/demo.css'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
ReactDom.render(
    // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>        
                <App />           
            </BrowserRouter>
        </Provider>    
    // </React.StrictMode>    
    ,
    document.getElementById("root")
)