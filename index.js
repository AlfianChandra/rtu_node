const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const v1Routes = require('./routes/api/v1');
const dbUri = 'mongodb+srv://freerhyme:Qwe123qwe@cluster0.nebai.mongodb.net/folsaves?retryWrites=true&w=majority';
const app = express();
const APP_PORT = 3001;
const APP_HOST = 'localhost';
app.use(cors());
app.disable('x-powered-by');
const server = http.createServer(app);
mongoose.connect(dbUri)
   .then(() => {
      console.log('===> Database: Connected to Atlas');
   }).catch((error) => {
      console.error('MongoDB connection error:', error);
   });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);

server.listen(APP_PORT, () => { 
      console.log(`===> Server: Running on http://${APP_HOST}:${APP_PORT}`);
})


