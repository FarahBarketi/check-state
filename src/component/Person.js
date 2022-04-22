import React , { Component } from "react";
 class Person extends Component{
constructor(){
    super();
    this.state={
        FullName:"Farah Barketi",
        Bio:"...", 
        Profession:"...",
        Image:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/8/6/886a1f5f0b_84113_fs-01-13668997695-1b11821209-k.jpg", 
      
    };
}
    render(){
        return(
            <div>
                <h1>Person Profil</h1>
               <h2> FullName:{this.state.FullName}</h2>
               <h2> Bio:{this.state.Bio}</h2> 
               <h2> Profession:{this.state.Profession}</h2>
               {this.state.imgSrc}
            </div>
        );
    }
}
export default Person;