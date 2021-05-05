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
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/dashboard'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Dashboard />
        </Route>
        <Route path='/projects'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Projects />
        </Route>
        <Route path='/tickets'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Tickets />
        </Route>
        <Route path='/clients'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Clients />
        </Route>
        <Route path='/inbox'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Inbox />
        </Route>
        <Route path='/account'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Account />
        </Route>
        <Route path='/roles'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Roles />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
/*
TO-DO LIST
FINISH HOOKING UP PAGES TO REDUX STORE
ROLE BASED ACCESS CONTROL
MAKE WEBSITE RESPONSIVE
WORK ON EXAMPLE DETAILS PAGES 
*/
