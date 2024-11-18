import React from 'react'
import Header from './Header'

function Why() {
  return (
    <>
    <Header/>
      <section className="us_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Why Choose Us
        </h2>
      </div>

      <div className="us_container ">
  <div className="row">
    <div className="col-lg-3 col-md-6">
      <div className="box">
        <div className="img-box">
          <img src="images/u-1.png" alt="Quality Equipment" />
        </div>
        <div className="detail-box">
          <h5>QUALITY EQUIPMENT</h5>
          <p>
            Train with top-notch, cutting-edge equipment designed to maximize your performance and ensure safe, efficient workouts.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="box">
        <div className="img-box">
          <img src="images/u-4.png" alt="Nutrition" />
        </div>
        <div className="detail-box">
          <h5>NUTRITION</h5>
          <p>
            Get expert guidance on nutrition to fuel your fitness goals and maintain a healthy lifestyle tailored to your needs.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="box">
        <div className="img-box">
          <img src="images/u-2.png" alt="Healthy Diet Plan" />
        </div>
        <div className="detail-box">
          <h5>HEALTHY DIET PLAN</h5>
          <p>
            Receive personalized diet plans designed to complement your workouts and promote overall wellness and energy.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="box">
        <div className="img-box">
          <img src="images/u-3.png" alt="Sport Training" />
        </div>
        <div className="detail-box">
          <h5>SPORT TRAINING</h5>
          <p>
            Enhance your athletic skills with specialized sport training programs led by experienced professionals.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </section>
    </>
  )
}

export default Why