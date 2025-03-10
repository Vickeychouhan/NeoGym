import React from 'react'
import Header from './Header'

function Tra() {
  return (
    <>
    <Header/>
    <section className="trainer_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Gym Trainers
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
              <h5>
                Smirth John
              </h5>
            </div>
            <div className="img-box">
              <img src="images/t1.jpg" alt=""/>
            </div>
            <div className="social_box">
              <a href="www.facebook.com">
                <img src="images/facebook-logo.png" alt=""/>
              </a>
              <a href="www.twitter.com">
                <img src="images/twitter.png" alt=""/>
              </a>
              <a href="www.instagram.com">
                <img src="images/instagram-logo.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
              <h5>
                Jean Doe
              </h5>
            </div>
            <div className="img-box">
              <img src="images/t2.jpg" alt=""/>
            </div>
            <div className="social_box">
              <a href="www.facebook.com">
                <img src="images/facebook-logo.png" alt=""/>
              </a>
              <a href="www.twitter.com">
                <img src="images/twitter.png" alt=""/>
              </a>
              <a href="www.instagram.com">
                <img src="images/instagram-logo.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
              <h5>
                Alex Den
              </h5>
            </div>
            <div className="img-box">
              <img src="images/t3.jpg" alt=""/>
            </div>
            <div className="social_box">
              <a href="www.facebook.com">
                <img src="images/facebook-logo.png" alt=""/>
              </a>
              <a href="www.twitter.com">
                <img src="images/twitter.png" alt=""/>
              </a>
              <a href="www.instagram.com">
                <img src="images/instagram-logo.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Tra