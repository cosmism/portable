const express = require('express');
const router = express.Router()

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync') 
const adapter = new FileSync('./db.json')         

const db = low(adapter)
db.defaults({ user:[], device:[] ,data:[] }).write()

router.post('/test', function(req,res){
    console.log(req.body.deviceID)
    console.log(req.body.location)
    res.send(req.body.deviceID)
})

router.get('/read_data/:userid', function(req, res) {
    res.send(db.get('data').find({ name:req.params.userid}).value())
})

router.get('/insert/:deviceid/:location', function(req,res){
    //parse
    db.get('data').push({deviceid:'AAA',location : 27}).write();
})

router.get('/test/insert/:deviceid/:location', function(req,res){
    //parse
    db.get('data').push({deviceid:req.params.deviceid ,location: req.params.location}).write()
    res.send(db.get('data').value())
})

router.post('/login', function(req,res){
    let user = res.send(db.get('data').find({ name:req.body.id}).value())
    console.log(user.id)
    console.log(user.pw)
})

router.post('/register', function(req,res){
    console.log(req.body.id)
    console.log(req.body.pw)
    db.get('data').push({id:req.body.id ,pw: req.body.pw}).write()
})
module.exports = router;