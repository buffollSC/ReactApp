import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";
import { publicRouters, privateRouters } from "./UI/router";

const AppRouter = () => {
    const {isAuth, isPageRefresh} = useContext(AuthContext);
    
    if (isPageRefresh) {
        return <Loader/>
    }
    return (
        isAuth
            ? 
                <Switch>
                    {privateRouters.map(route => 
                        <Route
                            component = {route.component}
                            path = {route.path}
                            exact = {route.exact}
                            key = {route.path}
                        />  
                    )}
                    <Redirect to = '/posts'/>
                </Switch>
            :
                <Switch>
                    {publicRouters.map(route => 
                        <Route
                            component = {route.component}
                            path = {route.path}
                            exact = {route.exact}
                            key = {route.path}
                        />  
                    )}
                    <Redirect to = '/login'/>
                </Switch> 
    )
}
export default AppRouter;