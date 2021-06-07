import {
  CREATE_ORGANIZATION,
  SIGN_UP_SUCCESS,
  FIND_ORGANIZATION_SUCCESS,
  RETRIEVE_USER_INFO,
  LOAD_USERS,
  LOGOUT_SUCCESS,
  LOAD_CLIENTS,
  LOAD_PROJECTS,
  JOIN_EXISTING_ORGANIZATION,
  LOAD_TICKETS,
  LOADING_START,
  LOADING_END,
} from '../actions/actions';

const initialState = {
  projects: [],
  tickets: [],
  currentUser: { firstname: 'LOADING' },
  users: [],
  clients: [],
  organizationid: '',
  newUser: {},
  isLoading: true,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state, token: action.payload };
    case CREATE_ORGANIZATION:
      return { ...state, organizationid: action.payload };
    case FIND_ORGANIZATION_SUCCESS:
      return { ...state, organizationid: action.payload.id };
    case RETRIEVE_USER_INFO:
      return { ...state, currentUser: action.payload };
    case LOAD_USERS:
      return { ...state, users: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: { firstname: 'LOADING' } };
    case LOAD_CLIENTS:
      return { ...state, clients: action.payload };
    case LOAD_PROJECTS:
      return { ...state, projects: action.payload };
    case JOIN_EXISTING_ORGANIZATION:
      return { ...state, newUser: action.payload };
    case LOAD_TICKETS:
      return { ...state, tickets: action.payload };
    case LOADING_START:
      return { ...state, isLoading: action.payload };
    case LOADING_END:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export default reducer;
