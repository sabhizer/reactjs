import React from "react";

function ContactCardList(props){
    //props is a object.
    console.log(props);
    //email p tag configured such that, if email-id is not specified in App.js i.e props.email=null, then it will not show complete element i.e "Email :" in UI.
    return(
        <div>
            <h3>Name : {props.name}</h3>
            <img src={props.imgURL} alt="Actor"/>
            <p>Phone : {props.phone}</p>
            <p style={{display: props.email ? "block" : "none"}}>Email : {props.email}</p>
        </div>
    )
}


export default ContactCardList;