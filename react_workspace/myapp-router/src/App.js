import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import BoardList from './components/board/BoardList';
import BoardWrite from './components/board/BoardWrite';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/board">게시판</a>
            </li>
          </ul>
        </nav>
        
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route> 
        <Route path="/about" component={About}></Route>
        <Route exact path="/board" component={BoardList}></Route>
        <Route path="/board/write" component={BoardWrite}></Route>
        <Route path="/board/edit/:id" component={BoardWrite}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;