import React from "react";


function Card(props) {
    return(
        <div className="card card-design">
  <div className="card-header title-font">
    {props.title}
  </div>
  <div className="card-body ">
      <img className="center" src={props.imgUrl}></img>
    <h5 className=" author-font"> by {props.author}</h5>
    <p className="card-text">{props.post}</p>
    
  </div>
</div>
    )
}

export default Card