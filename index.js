const express = require('express')
const app = express()
const cors = require("cors");
const axios = require("axios");
app.use(cors());
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const { db } = require("./firebase");
const dbGet = db.collection("donordetails");
const getdatabase=async()=>{
}
//getdatabase()
//to insert doc
app.post("/register",(request,response)=>{
  console.log(request.body,'payload')
  const insertData = request.body
  db.collection('donordetails').doc(insertData.name)
  .set(insertData).then(() => 
  console.log('Inserted database'));
  response.send({data:'Inserted database'})
})
//to donate-blood
app.post("/donateblood",(request,response)=>{
  console.log(request.body,'payloaddb')
  const donateData = request.body
  console.log(donateData,'donatedate');
  db.collection('donatedate').doc(donateData.donorname)
  .set(donateData).then(() => 
  console.log('Inserted into donate database'));
  response.send({data:'Inserted database'})
})
//to get bloodtype
app.get("/reqblood",async(request,response)=>{
  console.log(request.query,'params');
  const reqdata = request.query
  const markers = [];
    await db.collection('donordetails').get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
      markers.push(doc.data());
    });
});
console.log(markers,'markers');
const filt = markers.filter((d)=>d['bloodgroup'] === reqdata.bloodType && d['district'] === reqdata.location )
console.log(filt,'filter');
response.send(filt)
})
//to get availability
app.get("/availability",async(request,response)=>{
  console.log(request.query,'params');
  const reqdata = request.query
  const avail = [];
    await db.collection('bloodbanks').get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
      avail.push(doc.data());
    });
});
console.log(avail,'markers');
const afilt = avail.filter((d)=>d['location'] === reqdata.selectedLocation && d['bloodtype'] === reqdata.selectedBloodType)
console.log(afilt,'filter');
response.send(afilt)
})
//to check email and pswd
app.get("/login",async(request,response)=>{
  console.log(request.query,'params');
  const reqdata = request.query
  const marker2 = [];
    await db.collection('donordetails').get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
      marker2.push(doc.data());
    });
});
console.log(marker2,'marker2');
const epassword = marker2.find((d)=>d['email'] === reqdata.email && d['password'] === reqdata.password)
console.log(epassword,'filter');
response.send(epassword)
})
//to check nearby bank
app.get("/nearby",async(request,response)=>{
  console.log(request.query,'params');
  const nearbydata = request.query
  const neardata = [];
    await db.collection('nearby').get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
      neardata.push(doc.data());
    });
});
console.log(neardata,'neardata');
const nearfilt = neardata.filter((d)=>d['state'] === nearbydata.selectedState && d['district'] === nearbydata.selectedDistrict)
console.log(nearfilt,'nearfilter');
response.send(nearfilt)
})
app.listen(5000,()=>{
  console.log('app connected with 5000');
})
