import React,{ Component,Suspense, useState, useEffect, useMemo } from 'react'
import { HashRouter ,Route,Routes,Switch,Redirect } from 'react-router-dom'
import Admin from './layout/admin'
import Login from './views/Login'
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse">loading</div>
    </div>
)
class App extends Component{
    render() {
        return(
            <HashRouter>
                <Suspense fallback={loading}>
                    <Switch>
                        <Route path="/login" render={(props)=> <Login {...props} />} />
                        <Route path="/admin" render={(props) => <Admin {...props} />} />
                        <Redirect from="/" to="/login" />
                    </Switch>
                </Suspense>                
            </HashRouter>            
        )    
    }    
}
export default App