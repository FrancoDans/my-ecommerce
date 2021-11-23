import { func } from "prop-types";
import React from "react";
import navbar from "./components/navbar/Navbar";
import cartWidget from "./components/cartWidget/cartWidget"
import itemListContainer from "./components/itemListContainer/itemListContainer"

export default class App extends React.Component{
    render() {
        <div className="App">

             <Navbar>
                <cartWidget/>
             </Navbar>  
             <itemListContainer/>
               </div>
    }
}



