const axios = require('axios');

const url = 'https://livraria-app.herokuapp.com/api/livros/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5Nzg4MjIzLCJpYXQiOjE2ODk3ODY0MjMsImp0aSI6IjE1OGRjYWQwOWY4NzRhNjY4M2IyNGM1ODlkMzcwNmUyIiwidXNlcl9pZCI6MTl9.YB3NEOGwg42fq1vqJDnkTLX0DjY06oRDDL7HfR6Nt9I';

const headers = {
  'Authorization': `Bearer ${token}`
};

axios.get(url, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Ocorreu um erro na solicitação:', error.message);
  });
