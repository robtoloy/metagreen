import React from 'react'

let Slides = React.createClass({
  render(){
    return(
      <div>
        <span className="slideshow">
              <img className="mySlides fadeIt" src="img/home-3.jpg"/>
              <img className="mySlides fadeIt" src="img/graph.jpg"/>
              <img className="mySlides fadeIt" src="img/home-1.jpg"/>
        </span>
      </div>
    )
  }
});
export default Slides;
