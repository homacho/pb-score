//necessary imports
import React from "react"
import { render } from "react-dom"

//we are importing the component we just made
import { App } from "./components/App";


//the component we will be rendering
class Index extends React.Component {
	//anything in this function will be done when the app is loaded
	render() {
		//anything in this function will be displayed
		return(
			//this is a JSX component, not real HTML
			<App/>
		)
	}
}
//where we actually render the app, placed in the “index.html” inside of the “app” div
render(<Index/>, window.document.getElementById("app"))
