const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.json());
  
  const cors=require("cors");
  const corsOptions ={
     origin:'*', 
     credentials:true,
     optionSuccessStatus:200,
  }
  
  app.use(cors(corsOptions))
  
  require('../api/routes/database')(app);

  return app;
};