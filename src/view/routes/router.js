import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Search from "../pages/Search";
import Live from "../pages/Live";


const Router = () => {

    return(
        <Routes>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/search"} component={Search}/>
            <Route exact path={"/live/:id"} component={Live}/>
        </Routes>
    )
}

export default Router;