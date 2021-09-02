import './App.css';
import Users from './Users';
import AddUser from './AddUser';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route exact path='/'>
            <Users />
          </Route>

          <Route path='/add_user'>
            <AddUser />
          </Route>
          
        </Switch>
      </Router>
        
        
    </div>
  );
}

export default App;
