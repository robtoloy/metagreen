import React from 'react'

import Slides from './Slides.jsx'

let Home = React.createClass({
  render(){
    return(
      <div>

        <Slides/>

        <span className="line-accents">
        </span>

        <div className="intro-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="intro-message">
                            <div className="slideshow-label">Setting the standard for science-powered natural products innovation.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
});
export default Home;
