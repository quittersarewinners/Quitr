const userController = require('../controllers/userController');
const axios = require('axios')

test('login functionality', async () => {
    const server = await axios.create({
        baseURL: 'http://localhost:3000/api',
      });
    const test = await server.post('/user/login', {
      username: 'floppy',
      password: '123'
    })
    expect(test.data.username).toEqual('floppy');
  });
/*
test('wrong login functionality', async () => {
const server = await axios.create({
    baseURL: 'http://localhost:3000/api',
    });
const test = await server.post('/user/login', {
    username: 'floppy',
    password: 'abc'
})
expect(test.data.username).not.toEqual('floppy');
});
*/