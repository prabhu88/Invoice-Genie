import React from "react";
import ReactDOM from 'react-dom/client'
//import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/store'
import App from "./app.js";
import '@fortawesome/fontawesome-free'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/demo.css'
import './assets/css/light-bootstrap-dashboard-react.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>        
                <App />           
            </BrowserRouter>
        </Provider>    
    </React.StrictMode>        
)