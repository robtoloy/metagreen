import React from 'react'

let Footer = React.createClass({
  render: ()=>{
    return(
      <div className="container-fluid footer-cont">
          <div className="row">
              <a id="backToTop" href="#" title="Back to top">^</a>
              <footer className="meta-footer">
                  <p>Metagreen - Est. 2015</p>
              </footer>
          </div>
      </div>
    )
  }
});export default Footer;
