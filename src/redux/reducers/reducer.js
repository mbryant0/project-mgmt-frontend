const initialState = {
  users: [
    {
      userid: 1,
      firstname: 'DemoA',
      lastname: 'Account',
      role: 'Demo Admin',
      email: 'demoa@fakemail.com',
      password: 'password',
    },
    {
      userid: 2,
      firstname: 'DemoD',
      lastname: 'Account',
      role: 'Demo Developer',
      email: 'demod@fakemail.com',
      password: 'password',
    },
    {
      userid: 3,
      firstname: 'DemoQA',
      lastname: 'Account',
      role: 'Demo Quality Assurance Analyst',
      email: 'demoqa@fakemail.com',
      password: 'password',
    },
    {
      userid: 4,
      firstname: 'DemoI',
      lastname: 'Account',
      role: 'Demo Inactive',
      email: 'demoi@fakemail.com',
      password: 'password',
    },
    {
      userid: 5,
      firstname: 'Lloyd',
      lastname: 'Castillo',
      role: 'Admin',
      email: 'lcastillo@fakemail.com',
      password: 'password',
    },
    {
      userid: 6,
      firstname: 'Alberta',
      lastname: 'Stewart',
      role: 'Developer',
      email: 'astewart@fakemail.com',
      password: 'password',
    },
    {
      userid: 7,
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
      zip: '91215',
      country: 'United States of America',
      phoneNumber: '1(888)-345-9304',
      description:
        'This is a mid-sized company that sells various brands of coffee.',
      website: 'www.coffeeroasters.com',
      street: '123 Sunshine St',
    },
    {
      clientid: 2,
      name: 'Citi Bank',
      city: 'Memphis',
      state: 'TN',
      zip: '60734',
      country: 'United States of America',
      phoneNumber: '1(888)-122-4587',
      description: 'null null',
      website: 'citibank.com',
      street: '83 Broadway Blvd',
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
