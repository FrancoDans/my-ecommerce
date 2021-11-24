import { func } from "prop-types";
import React from "react";
import navbar from "./components/navbar/Navbar";
import cartWidget from "./components/cartWidget/cartWidget"
import itemListContainer from "./components/itemListContainer/itemListContainer"
import { Container } from "react-bootstrap";
import  ContainerCount  from "./components/Contador/container"

export default class App extends React.Component{
    render() {
        <div className="App">

             <Navbar>
                <cartWidget/>
             </Navbar>  
                <itemListContainer/>
                <ContainerCount />
               </div>
    }
}



