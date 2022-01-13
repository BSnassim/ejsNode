const express = require("express");
const app = express() ;
const port = 8888;

app.set ('view engine', 'ejs') ;
app.get('/page:num', (req, res)=>{
    res.render('page.ejs', {"numero": req.params.num}) ;
  }) ;
    
  app.listen(port,()=>{
      console.log("Its working");
  });