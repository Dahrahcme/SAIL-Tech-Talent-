import React, { Component } from 'react';

class About extends Component {
    
    state = {
        name: "Joseph", address: "34, Ikorodu Road"
           
    }

    render() {
        return (
            <div>
                 <p>
                    My name is {this.state.name} and i live at {this.state.address}
                </p> 
            </div>
        );
    }
}

export default About;
