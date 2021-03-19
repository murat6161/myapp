import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import User from './components/User'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title = "User App"/>
        <hr/>

        <User 
        name = "Murat Gumus"
        salary = "5000"
        department = "Bilisim"/>

    <User 
        name = "Hakan Yilmaz"
        salary = "4000"
        department = "Pazarlama"/>

      <User 
        name = "Osman Turan"
        salary = "6000"
        department = "Uretim"/>    
      </div>
      
    )
  }
}