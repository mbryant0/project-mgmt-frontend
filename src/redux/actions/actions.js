import axios from 'axios';

export const CREATE_ORGANIZATION = 'CREATE_ORGANIZATION';
export const START_SIGN_UP = 'START_SIGN_UP';

export const signUp = (data) => (dispatch) => {
  return axios
    .post('http://localhost:2021/users/user', data)
    .then((res) => {
      console.log(res);
      dispatch({ type: START_SIGN_UP, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createOrganization = () => (dispatch) => {
  dispatch({ type: START_SIGN_UP });
};
