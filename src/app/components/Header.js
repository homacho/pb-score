//necessary imports
import React from "react";

//the class we are exporting
export class Header extends React.Component{
	//anything in this function will be loaded when the component is loaded
	render(){
		const 	headerStyle = {
		            textAlign: 'center',
		            height: 20 + '%',
		            width: 99 + '%',
		            padding: 5,
		            marginBottom: 5,
		            backgroundColor: "#000000"
		        };
		//this is what will be rendered
		return (
            <nav style={headerStyle}>
                <div>
                    <h1 style={{color: '#ffffff'}}>PB Score</h1>
                </div >
            </nav>
		);
	}
}
