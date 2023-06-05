import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // cannot output boolean and object, because they are not valid in jsx
  // const person = { name: 'yoshi', age: 30 };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path ='/'>
              <Home />
            </Route>

            <Route exact path = '/create'>
              <Create />
            </Route>

            <Route path="/songs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
