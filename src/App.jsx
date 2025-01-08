import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const userDetails = [
    {
      name:"James",
      city:"New York",
      work:"Frond-end developer",
      profile:"Photo here.png",
      online:true,
      skills:["UI / UX","Front-end development","HTML","CSS","Javascript","React","Node"],
    },
    {
      name:"Robert",
      city:"California",
      work:"Full Stack web developer",
      profile:"Group 162532.png",
      online:false,
      skills:["Vlogging","Web-Development","HTML","CSS","Javascript","React","Angular"],
    },
    {
      name:"Nancy",
      city:"San Francisco",
      work:"Senior Software Developer",
      profile:"image.png",
      online:true,
      skills:["C","C++","Java Programing","Python","CH.Net","MySQL","MongoDB"],
    },
  ]
  return (
    <>
     {userDetails.map((userDetails,i)=>(
      <Card name={userDetails.name} city={userDetails.city} work={userDetails.work} profile={userDetails.profile} online={userDetails.online} skills={userDetails.skills}/>
     ))}
    </>
  )
}

export default App
