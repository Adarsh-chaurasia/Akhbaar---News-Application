import './App.css';
import React from 'react';
import {
  
  Switch,
  Route,

} from "react-router-dom";
// import {Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


    };

    
  }
  pagesize=6;
  render() {
    
    return <div>
      
        <Navbar />
        <Switch>
          <Route exact path="/"><News key="general"  pagesize={this.pagesize} country="in" title='Indian Top Headlines' category="general" /></Route>
          <Route  exact path="/entertainment"><News key='entertainment' pagesize={this.pagesize} country="in" title='Entertainment Headlines' category="entertainment"/></Route>
          <Route exact path="/health"><News key="health" pagesize={this.pagesize} country="in" title='Health Headlines' category="health"/></Route>
          <Route exact path="/business"><News key ='business' pagesize={this.pagesize} country="in" title='Business Headlines' category="business"/></Route>
          <Route exact path="/science"><News id='science' pagesize={this.pagesize} country="in" title='Science Top Headlines' category="science" /></Route>
          <Route exact path="/sport"><News id='sport' pagesize={this.pagesize} country="in" title='Sports Headlines' category="sport"/></Route>
          <Route exact path="/technology"><News id='technology' pagesize={this.pagesize} country="in" title='Top Tech Headlines' category="technology" /></Route>

        </Switch>
      
    </div>;
  }
}

// #endregion

export default App;
