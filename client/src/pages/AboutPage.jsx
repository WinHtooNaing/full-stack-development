import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to our Y2K page, where we delve into the fascinating world of football fashion during the turn of the millennium. The Y2K era, spanning from the late 1990s to the early 2000s, was a time of unique designs, bold colors, and a distinct fusion of style and sport. Join us on a journey through the most iconic football shirts that captured the spirit of an unforgettable era.
        During the Y2K era, football shirts transcended the boundaries of the pitch and became symbols of cultural expression. With vibrant patterns, experimental color combinations, and innovative designs, these shirts not only represented the teams on the field but also showcased the trends and attitudes of the times.
        As we step back in time, we witness the evolution of football kits. From the sleek and classic designs of the 1990s to the bold and daring aesthetics of the early 2000s, each year brought a new interpretation of football fashion that left a lasting impact.
        The Y2K era witnessed some of the most unforgettable moments in football history. Whether it was the rise of certain teams to dominance, legendary players showcasing their skills, or historical matches that still resonate today, the football shirts from this period serve as timeless reminders of these milestones.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/home/permierleague.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Premier League</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/home/laliga.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Laliga</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/home/serieA.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Serie A</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/home/bundesliga.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Others</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage