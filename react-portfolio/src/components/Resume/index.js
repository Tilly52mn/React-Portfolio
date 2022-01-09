import React from 'react'

function Resume() {

  return (
    <section className="my-5" >
      <h1 id="Portfolio">Resume</h1>
      <p>Download my<a href="../../../public/Resume.pdf" download> resume</a></p>
      <div className="my-2">
          <div>
              <h4>Front-end Proficencies</h4>
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JQery</li>
                  <li>responsive design</li>
                  <li>Bootstrap</li>
                  <li>React</li>
              </ul>
          </div>
          <div>
              <h4>Back-end Proficencies</h4>
              <ul>
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequilize</li>
                  <li>responsive design</li>
                  <li>MongoDB, Mongoose</li>
                  <li>Rest</li>
              </ul>
          </div>
      </div>
    </section>
  )
}

export default Resume;