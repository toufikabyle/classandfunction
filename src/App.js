import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'
import About2 from './components/pages/About2'
import Joke from './components/Joke'
import Joke2 from './components/Joke2'



function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="container mx-auto">
          <Route path="/" exact component={Joke} />
          <Route path="/about" exact component={About} />
          <Route path="/2" exact component={Joke2} />
          <Route path="/about" exact component={About2} />
        </div>
      </div>
    </Router>


  );
}

export default App;
