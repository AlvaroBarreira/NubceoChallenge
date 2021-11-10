import { Fragment } from 'react'
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login'
import List from '../Pages/List';



function RoutesIndex() {
    return (
 
            
            <Switch>
                
                <Route exact path="/" component={Login}/>
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/list" component={List} />
            
            </Switch>
     
    )
}

export default RoutesIndex
