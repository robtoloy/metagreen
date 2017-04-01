import React from 'react'

import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

class App extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}
export default App;
