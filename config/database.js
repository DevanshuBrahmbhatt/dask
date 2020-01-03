const express=require('express');
const mysql=require('mysql');

//Create connection

const conn=mysql.createConnection({

    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dcommunity'

});

//Connection 
conn.connect((err)=>{
if(err){
    
  console.log(err);
}

console.log("Mysql connected");

});

module.exports = conn;
 
