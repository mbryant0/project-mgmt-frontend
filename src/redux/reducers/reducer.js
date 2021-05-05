const initialState = {
  users: [
    {
      userid: 1,
      firstname: 'Lloyd',
      lastname: 'Castillo',
      role: 'Admin',
      email: 'lcastillo@fakemail.com',
      password: 'password',
    },
    {
      userid: 2,
      firstname: 'Alberta',
      lastname: 'Stewart',
      role: 'Developer',
      email: 'astewart@fakemail.com',
      password: 'password',
    },
    {
      userid: 3,
      firstname: 'Jana',
      lastname: 'Sparks',
      role: 'Developer',
      email: 'jsparks@fakemail.com',
      password: 'password',
    },
  ],
  clients: [
    {
      clientid: 1,
      name: 'Coffeeroasters',
      city: 'San Francisco',
      state: 'CA',
      country: 'United States of America',
      phoneNumber: '1(888)-345-9304',
    },
    {
      clientid: 2,
      name: 'Citi Bank',
      city: 'Memphis',
      state: 'TN',
      country: 'United States of America',
      phoneNumber: '1(888)-122-4587',
    },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
