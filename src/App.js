import React, { Component } from "react";
import Person from "./component/Person";
 class App extends React.Component{
constructor(){
    super();
    this.state={
      IsTrue:false
  };
}
ToogleTrue = ()=> this.setState ({IsTrue: !this.state.IsTrue});

 interval = setInterval(() => {
    console.log('montage');
    console.log('Update');
  }, );  
render(){
        return(
            <div>
              <button onClick={this.ToogleTrue}>show</button>
              {
                this.state.IsTrue?<Person/>: null
              }
             </div>
        );
    }
}
export default App;