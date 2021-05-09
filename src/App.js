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
import './App.css';

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

POSTING A NEW USER TO AN ORGANIZATION

1. POST A NEW ORGANIZATION TO THE DATABASE AND/OR RETRIEVE ACCESS CODE
1. POST A NEW USER WITH ORGANIZATION OBJECT AND ORGANIZATION ID (AND MAYBE ACCESS CODE)

SETSTATE(RES.DATA.USERS)
SEND A PATCH REQUEST AS {
  ...USERS, 
  {
  FIRSTNAME: 'YADDA YADA'
  }
}


MAY 9
CLIENTS
- CREATE CLIENT (ORGANIZATION OWNER, ADMIN, PROJECT MANAGERS)
- READ CLIENTS (ORGANIZATION OWNER, ADMIN, PROJECT MANAGERS)
- UPDATE CLIENTS (ORGANIZATION OWNER, ADMIN, PROJECT MANAGERS)
- DELETE CLIENTS (ORGANIZATION OWNER, ADMIN, PROJECT MANAGERS CAN REQUEST)
PROJECTS
- CREATE (OO, ADMIN, PM)
- READ ALL PROJECTS (OO, ADMIN, PM)
- READ CURRENT PROJECTS (OO, ADMIN, PM, DEVELOPER)
- UPDATE PROJECTS (OO, ADMIN, PM)
- DELETE (OO, ADMIN, PM)
FIX SUBMITTERID + USERID ISSUE (SO WE CAN HAVE BOTH AN ASSIGNEE AND AN OWNER OF A TICKET)

IDEA
CREATE A SUBMITTER MODEL
CONSISTS OF:
SUBMITTER ID (AUTO GENERATED)
@ONETOMANY RELATIONSHIP WITH TICKETS
@ONETOONE RELATIONSHIP WITH USERS ("https://www.baeldung.com/jpa-one-to-one")

ORGANIZATIONS //PATCH
- UPDATE ORGANIZATION NAME

RESEARCH FUTURE IMPLEMENTATION SO THAT THE WORKFLOW IS SMOOTHER IN UPCOMING DAYS
I.E. ROLE BASED ACCESS CONTROL, DASHBOARD GRAPHS, SETTING UP SQL, DEPLOYING

MAY 10
TICKETS
- CREATE (OO, ADMIN, PM, DEVELOPER, SUBMITTER)
- READ (OO, ADMIN, PM, DEVELOPER, SUBMITTER)
- UPDATE (OO, ADMIN, PM, DEVELOPER - SUBMITTER CAN REQUEST)
- DELETE (OO, ADMIN, PM - DEVELOPER AND SUBMITTER CAN REQUEST)
EMAILS
- CREATE (ALL ACCOUNT TYPES)
- READ CURRENT USER EMAILS (ALL ACCOUNT TYPES)
- READ ALL EMAILS IN ORGANIZATION (OO, ADMIN)
- UPDATE (NOT ACCESSIBLE)
- DELETE CURRENT USERS EMAILS(ALL ACCOUNT TYPES)
- DELETE ALL EMAILS (NOT ACCESSIBLE WITHOUT DELETING ORGANIZATION)
MAY 11
EMAIL REPLIES (SAME AS ABOVE)
SET UP USER AUTHENTICATION AND AUTHORIZATION

MAY 12
FIX ORGANIZATIONID + ACCESSCODE ISSUE
SET UP ROLE BASED ACCESS CONTROL
USERS
- UPDATE USER ROLE (ORGANIZATION OWNER, ADMINS)
- UPDATE CURRENTUSER PASSWORD (ONLY ACCESSIBLE BY USER THAT IS LOGGED IN)
- DELETE USER (NOT DIRECTLY ACCESSIBLE BY ANYONE)

MAY 13
SET UP ALL REDUX ACTIONS AND STATE TO MAKE REQUESTS TO BACKEND

MAY 14
SET UP ALL REDUX ACTIONS AND STATE TO MAKE REQUESTS TO BACKEND
START LINKING THEM UP TO THE COMPONENTS 
MAY 15
CONTINUE LINKING UP COMPONENTS

MAY 16
FINISH FRONT END FEATURES + MAKE SITE RESPONSIVE

MAY 17
DEPLOY
TO-DO LIST

ADD RADIO BUTTONS TO DEMO ACCOUNTS
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
