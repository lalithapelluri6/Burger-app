let express = require("express");

let burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function(req,res){
   burger.selectAll(function(data){
       var hbsobj = {
           burgers: data
       };
       console.log(hbsobj);
       res.render("index",hbsobj);
   });
});

router.post("/", function(req,res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/");
    });
});

router.put(":/id", function(req,res){
    var id = req.params.id;
    console.log("id:", id);
    burger.updateOne(id, function(){
        res.redirect("/");
    });
});

module.exports = router;
