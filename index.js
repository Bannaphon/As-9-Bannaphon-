const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getname', (req, res) => {
    res.send('Bannaphon Kongthip')
})
app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Bannaphon Kongthip',
        age: 21,
        apocalypse: 'I LOVE YOU 3000',
        detail: 'Study Engineering at Bangkok university.',
    }
    res.send(data)
  })
  app.get('/getabout', (req, res) => {
    let data = {
    name: 'Bannaphon Kongthip',
    age: 21,
    email: 'banglhong7@gmail.com',
    address: 'Pathumtani Thailand 12120',
    }
    res.send(data)
  })
  app.get('/getproject', (req, res) => {
    let data = {
    project_name: 'Song of DAY 6',
    project_description:'우린 WE - DAY 6',
    project_link: 'https://www.youtube.com/watch?v=tqyrl2V1kTM',
    }
    res.send(data)
  })
  app.get('/getcontact', (req, res) => {
    let data = {
    address: 'Pathumtani Thailand 12120',
    email: 'banglhong7@gmail.com',
    phone_number: '0661129025',
    }
    res.send(data)
  })


app.listen(port, () => {
    console.log(`start server at port 3000.`)
})