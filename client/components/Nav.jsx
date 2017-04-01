import React from 'react'

let Nav = React.createClass({
  render(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
            <div className="container topnav">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="index.html"><img src="img/logo2.png" className="logo-icon"/></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="about.html">About</a></li>
                        <li><a href="tech.html">Technology</a></li>
                        <li><a href="people.html">People</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
});
export default Nav;
