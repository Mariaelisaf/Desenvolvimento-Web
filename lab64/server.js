const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.use((req, res) => {
  res.end("404");
});

// Inicia o servidor
app.listen(3000, function(){
  console.log(`Servidor rodando na porta 3000`);
});
