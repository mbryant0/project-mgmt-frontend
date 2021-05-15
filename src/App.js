import React from 'react';
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
import ClientDetails from './pages/ClientDetails/ClientDetails';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Signup from './pages/Signup/Signup';
import TicketDetails from './pages/TicketDetails/TicketDetails';
import { retrieveUserInfo } from './redux/actions/actions';
import { connect } from 'react-redux';
import './App.css';

// Get User Info by placing a useEffect on this file and then passing the user information as a prop
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/dashboard'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Dashboard />
        </Route>
        <Route exact path='/projects'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Projects />
        </Route>
        <Route path='/projects/:projectId'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <ProjectDetails />
        </Route>
        <Route path='/tickets/:ticketId'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <TicketDetails />
        </Route>
        <Route exact path='/tickets'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <Tickets />
        </Route>
        <Route path='/clients/:clientId'>
          <SideNavBar style={{ height: '100vh' }} appearance='inverse' />
          <ClientDetails />
        </Route>
        <Route exact path='/clients'>
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
        <Route path='/signup'>
          <Signup />
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

ORGANIZATION

CREATE (ALL) ✅
READ (ALL AUTHENTICATED)
UPDATE (ADMIN(OWNER))

CLIENT

CREATE (ADMIN, PROJECT MANAGER)
READ (ADMIN, PROJECT MANAGER)
UPDATE (ADMIN, PROJECT MANAGER)
DELETE (ADMIN, PROJECT MANAGER)

CONTACT

CREATE (ADMIN, PROJECT MANAGER)
READ (ADMIN, PROJECT MANAGER, DEVELOPER)
UPDATE (ADMIN, PROJECT MANAGER)
DELETE (ADMIN, PROJECT MANAGER)


EMAILREPLY

CREATE (ALL USERS EXCEPT DEMO ACCOUNTS)
READ (ALL USERS)
DELETE (ALL USERS EXCEPT DEMO ACCOUNTS)

EMAIL

CREATE
READ (ALL USERS EXCEPT INACTIVE)
DELETE (ALL USERS EXCEPT INACTIVE + DEMO ACCOUNTS)

PROJECT

CREATE (ADMIN, PROJECT MANAGER)
READ (ADMIN, PROJECT MANAGER, ALL ASSIGNED PROJECT USERS)
UPDATE (ADMIN, PROJECT MANAGER)
DELETE (ADMIN)

TICKET
CREATE (ADMIN, ALL ASSIGNED PROJECT USERS EXCEPT DEMO ACCOUNTS)
READ (ADMIN, ALL ASSIGNED PROJECT USERS)
UPDATE (ALL ASSIGNED USERS EXCEPT DEMO ACCOUNTS)
DELETE (ADMIN, PROJECT MANAGER)


// create Auditing Fields (created/updated field) / Fix bugs with submitter
// create a HISTORY OBJECT
Example

May 10, 2021

12:30PM    Jane Fisher updated Ticket #12's priority from Standard to High.

DATE

TIME        {FIRST NAME}{LAST NAME} updated {TARGET OBJECT} #{ID}'s {TARGET FIELD} from {OLDVALUE} to {NEWVALUE}

It could be nice to click on a user's name and message them about the change, so I will be joining with the User Table

MAY 14
MAKE THE FOLLOWING PAGES FUNCTIONAL WITH BACKEND:

SIGNIN (demo accounts, protected routes)
SIGNUP (sign up as inactive of existing organization + sign up as admin of new organization)
CLIENTS (create, update + delete clients, read client info and load it into table, add dummy clients to test)
CLIENTDETAILS (read the details of a specific client)


MAY 15

MAKE THE FOLLOWING PAGES FUNCTIONAL WITH BACKEND:

PROJECTS
PROJECTDETAILS
TICKETS
TICKETDETAILS

MAY 16

MAKE THE FOLLOWING PAGES FUNCTIONAL WITH BACKEND:

INBOX
DASHBOARD
ROLES
ACCOUNT


MAY 17
DEPLOY FRONT END
UPDATE README
REMOVE MISC CONSOLE.LOGS, FILES, ETC

MAY 18
ADD TESTS ON FRONT END + BACK END + SECURITY + ANY FINISHING TOUCHES



FAQ
HOW DO I DELETE MY OWN ACCOUNT?
FOR ADMINS(NON-ORGANIZATION OWNERS):
YOU MAY GO TO YOUR ACCOUNT SETTINGS AND DEACTIVATE YOUR OWN ACCOUNT. YOUR ACCOUNT WILL BE DELETED 
AUTOMATICALLY AFTER 1 WEEK.

FOR ORGANIZATION OWNERS:
PLEASE CONTACT OUR SUPPORT EMAIL AND WE WILL BE HAPPY TO ASSIST.

FOR ALL OTHER USERS:
GO TO YOUR ACCOUNT SETTINGS AND REQUEST TO DEACTIVATE YOUR ACCOUNT FROM AN ADMIN.

HOW DO I DELETE USERS FROM MY ORGANIZATION?
GO TO MANAGE USERS ROLES. SELECT ALL USERS THAT YOU WISH TO DELETE FROM YOUR ORGANIZATION.
THEN CLICK 'UPDATE USER ROLE(S) AND CHOOSE THE ROLE TYPE OF 'INACTIVE'. 
INACTIVE USERS HAVE NO PERMISSIONS AND ARE UNABLE TO ACCESS COMPANY DATA.
USERS ARE AUTOMATICALLY DELETED AFTER 1 WEEK BUT THE TIMEFRAME CAN BE CHANGED IN YOUR SETTINGS.
HOW DO I DELETE MY ORGANIZATION?
PLEASE CONTACT OUR SUPPORT EMAIL AND WE WILL BE HAPPY TO ASSIST.

*/

/* WHEN YOU RETURN FROM BREAK - REFACTOR OAUTH2 ON BACKEND 

PROOF KEY FOR CODE EXCHANGE (PKCE)

*/
