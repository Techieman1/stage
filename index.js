const express = require("express")
const {json} = require("express")
const connect = require("./database/database")
const app = express()
const moment = require('moment');
const personRouter = require("./router/personRouter")
const port =   process.env.PORT || 4000
connect()
app.use(json())
app.use("/", personRouter)

app.get('/', (req, res) => {
    const { slack_name, track } = req.query;
  
    if (!slack_name || !track) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
   
    const current_day = moment().format('dddd');
    const utc_time = moment.utc().format();
    
    const github_file_url = 'https://github.com/Techieman1/stage/blob/main/index.js';
    const github_repo_url = 'https://github.com/Techieman1/stage'
  
    
    res.status(200).json({
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url,
      github_repo_url,
      status_code:200,
    });
  });
  
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})