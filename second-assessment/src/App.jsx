import React, { Component } from 'react'
import UserOutput from './UserOutput'

 class App extends Component {


  state = {
    people: [
      {username: "Mubarak"},
      {username: "Courage"}
    ],
    showPerson: false
  }

  nameChangeHandler = (e) => {
    this.setState({
      people: [
        {username: e.target.value},
        {username: "Courage"}
      ],
    })
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: "Purple",
      color: "white"
    }

    return (
      <>
        <button style={style} onClick={this.toggleHandler}>Click Me</button> 
          
          {
          this.state.showPerson ? (
            <div>
              <UserOutput
              user = {this.state.people[0].username} 
              change = {this.nameChangeHandler}
              />
              <UserOutput user = {this.state.people[1].username}></UserOutput>
            </div>
          ) : null // A tag can be placed here instead of null
        }  
      </>
    )
  }
}


export default App