import React from 'react'
import picture from '../../assets/picture.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "./about.css"
function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <div>
        <div className='row'>
          <div className='col-lg-2 col-md-4 col-sm image'>
          <img className='picture' src={picture} alt="Adam Tilly"></img>
          </div>
          <div className="col">
            <h3>Backstory</h3>
            <p>
              Hello I am Adam Tilly. For the past 8 years I have been working in the Mechanical Design Engineering field. During that time I have designed things from mining drills to firetrucks to assembly machines. During that time though I have always had a draw to computers and coding. Now I have decided to make the career change to a web developer.
            </p>
          </div>
          <h3>What Drives Me</h3>
          <p>My family and faith are by far the most important things in my life. I have been blessed with my wife, two amazing fun young children, Eli(2), Anna(3 months), and three crazy dogs. During my recent Web Development bootcamp I have learned that I miss learning things and I really enjoy the challenge of coding. Few things are as frustrating as getting stumped on solving a coding problem but also equally so few things are as gratifying as when that code works flawlessly.  </p>
        </div>
      </div>
    </section>
  )
}

export default About