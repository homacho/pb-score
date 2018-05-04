//necessary imports
import React from "react";

//component imports
import { Header } from "./Header";

//the class we are exporting
export class App extends React.Component{
	//the class constructor, right now it is empty
	constructor(props) {
		// need to call the parent class before anything else
		super(props)
		// initialize state, this should have all the application data
		//the state is one of the most important things in React, learn it
		this.state = {
		};
	}
	//anything in this function will be loaded when the component is loaded
	render(){
		//this is what will be rendered
		return (
            <Header/>

		);
	}
}
