import React from 'react'

function Portfolio() {

  return (
    <section className="my-5" >
      <h1 id="Portfolio">Portfolio</h1>
      <container className="my-2">
        <row>
      <div className="first-project md" >
                <div className="label">
                   <a href=" https://cbc-connect-4.herokuapp.com/" target="_blank"> <h3>Connect-4</h3></a>
                   <a href="https://github.com/Bycicleace/connect-four"> <i class="fa fa-github fa-2x"></i></a>
                    </div>    
        </div>
        <div className="project project-2 md" href=""target="_blank">
                <div className="label">
                <a href="https://bycicleace.github.io/TrailFinder/#" target="_blank"> <h3>Park Finder</h3></a>
                   <a href="https://github.com/Bycicleace/TrailFinder"> <i class="fa fa-github fa-2x"></i></a>
                    </div>
            </div>
            <div className="project project-3 md" >
                <div className="label">
                <a href="https://arcane-retreat-82910.herokuapp.com/home" target="_blank"> <h3>Baby Tracker</h3></a>
                   <a href="https://github.com/adamjflynn/baby-brain"> <i class="fa fa-github fa-2x"></i></a>
                    </div>
                </div>
            <div className="project project-4 md" >
                <div className="label">
                <a href="https://aqueous-citadel-54470.herokuapp.com/" target="_blank"> <h3>Budget Tracker</h3></a>
                   <a href="https://github.com/Tilly52mn/Budget-Tracker-PWA"> <i class="fa fa-github fa-2x"></i></a>
                    </div>
                </div>
            <div className="project project-5 md">
                <div className="label">
                <a href="https://damp-ravine-39219.herokuapp.com/" target="_blank"> <h3>Note Taker</h3></a>
                   <a href="https://github.com/Tilly52mn/Note-Taker"> <i class="fa fa-github fa-2x"></i></a>
                </div>
            </div>
            <div className="project project-6 md" href="https://google.com"target="_blank">
                <div className="label">
                <a href="https://tilly52mn.github.io/weather-dashboard/" target="_blank"> <h3>Weather Dashboard</h3></a>
                   <a href="https://github.com/Tilly52mn/weather-dashboard"> <i class="fa fa-github fa-2x"></i></a>
                </div>
            </div>
        </row>
      </container>
    </section>
  )
}

export default Portfolio;
