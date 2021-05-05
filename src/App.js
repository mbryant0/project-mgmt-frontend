import { Switch, Route } from 'react-router-dom';
import 'rsuite/dist/styles/rsuite-default.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Roles from './pages/Roles/Roles';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Clients from './pages/Clients/Clients';
import Projects from '../src/pages/Projects/Projects';
import Tickets from '../src/pages/Tickets/Tickets';
import Inbox from './pages/Inbox/Inbox';
import Account from './pages/Account/Account';
import './App.css';

function App() {
  return (
    <div className='App'>
      <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/tickets'>
          <Tickets />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
        <Route path='/inbox'>
          <Inbox />
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
        <Route path='/roles'>
          <Roles />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
/*
TO-DO LIST

CREATE SEED DATA IN REDUX
ROLE BASED ACCESS CONTROL
MAKE WEBSITE RESPONSIVE
WORK ON EXAMPLE DETAILS PAGES 
*/
