import './App.css';
import NavBar from './Components/NavBar';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import NewsReleases from './Views/NewsReleases';
import Images from './Views/Images';
import Videos from './Views/Videos';

function App() {



  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/"></Route>
        <Route exact path="/newsreleases" component={NewsReleases}></Route>
        <Route exact path="/images" component={Images}></Route>
        <Route exact path="/videos" component={Videos}></Route>
      </div>
    </Router>
  );
}

export default App;
