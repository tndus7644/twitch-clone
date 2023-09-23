import React from 'react';
import Home from "../pages/Home";
import Search from "../pages/Search";
import Live from "../pages/Live";
import {Route, Routes} from "react-router";

const Router = () => {

    return(
        <Routes>
            <Route exact path={"/"} Component={Home}/>
            <Route exact path={"/search"} Component={Search}/>
            <Route exact path={"/live/:id"} Component={Live}/>
        </Routes>
    )
}

export default Router;