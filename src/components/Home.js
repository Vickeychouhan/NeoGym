import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="hero_area">
        {/* <!-- header section strats --> */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand" to="/index">
                <span>Neogym</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/index">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link" to="/why">
                        {" "}
                        Why us{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/trainer">
                        {" "}
                        trainers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        {" "}
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="user_option">
                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                      <button
                        className="btn  my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      ></button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* <!-- end header section -->
    <!-- slider section --> */}
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="col-lg-10 col-md-11 mx-auto">
                    <div className="detail-box">
                      <div>
                        <h3>Fitness</h3>
                        <h2>Training</h2>
                        <h1>Neogym</h1>
                        <p>
                          Achieve your fitness goals with dedication and expert
                          guidance at our state-of-the-art gym. Whether you're a
                          beginner or a fitness enthusiast, our personalized
                          training programs, modern equipment, and welcoming
                          environment are designed to help you unlock your
                          potential. Join us today and take the first step
                          towards a healthier, stronger, and more confident you!
                        </p>

                        <div className="">
                          <Link to="/">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
  <div className="container">
    <div className="col-lg-10 col-md-11 mx-auto">
      <div className="detail-box">
        <div>
          <h3>Transform</h3>
          <h2>Your Body</h2>
          <h1>NeoGym</h1>
          <p>
            Achieve the transformation you’ve always dreamed of with our expert-guided fitness programs. Whether you’re starting your journey or taking it to the next level, NeoGym provides the tools, support, and motivation you need to succeed. Step into a healthier, stronger you today!
          </p>
          <div className="">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
              <div className="carousel-item">
  <div className="container">
    <div className="col-lg-10 col-md-11 mx-auto">
      <div className="detail-box">
        <div>
          <h3>Fitness</h3>
          <h2>Training</h2>
          <h1>Neogym</h1>
          <p>
            Discover the perfect blend of strength and cardio training at NeoGym. Our customized programs and state-of-the-art equipment help you achieve your fitness goals effectively and safely. Join us and transform your body, mind, and lifestyle.
          </p>
          <div className="">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="carousel-item">
  <div className="container">
    <div className="col-lg-10 col-md-11 mx-auto">
      <div className="detail-box">
        <div>
          <h3>Wellness</h3>
          <h2>Journey</h2>
          <h1>Neogym</h1>
          <p>
            At NeoGym, we believe fitness is a journey, not a destination. With experienced trainers and a friendly environment, we’re here to support you every step of the way. Start your journey today and experience the joy of a healthier you!
          </p>
          <div className="">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="carousel-item">
  <div className="container">
    <div className="col-lg-10 col-md-11 mx-auto">
      <div className="detail-box">
        <div>
          <h3>Strength</h3>
          <h2>Building</h2>
          <h1>Neogym</h1>
          <p>
            Build your strength and endurance with tailored workouts designed to challenge and motivate you. From weight training to high-intensity sessions, NeoGym is equipped to help you unlock your full potential.
          </p>
          <div className="">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
            </ol>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>

      {/* <!-- Us section --> */}

      <section className="us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Why Choose Us</h2>
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
      <section className="heathy_section layout_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mx-auto">
        <div className="detail-box">
          <h2>HEALTHY MIND, HEALTHY BODY</h2>
          <p>
            Achieving a healthy mind and body goes beyond just physical exercise. It’s about embracing a lifestyle that fosters mental clarity, emotional balance, and physical vitality. At NeoGym, we provide you with the tools, guidance, and motivation to embark on this transformative journey. Whether it's through mindful workouts, expert-led sessions, or personalized plans, we’re here to help you unlock your true potential and live your best life.
          </p>
          <p>
            With a commitment to holistic wellness, our programs are designed to strengthen not only your muscles but also your resilience and determination. Rediscover the power of a balanced lifestyle and experience the joy of being the healthiest version of yourself.
          </p>
          <div className="btn-box">
            <Link to="/">READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* <!-- end heathy section -->

  <!-- trainer section --> */}

      <section className="trainer_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Gym Trainers</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h5>Smirth John</h5>
                </div>
                <div className="img-box">
                  <img src="images/t1.jpg" alt="" />
                </div>
                <div className="social_box">
                  <Link to="/">
                    <img src="images/facebook-logo.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/twitter.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/instagram-logo.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h5>Jean Doe</h5>
                </div>
                <div className="img-box">
                  <img src="images/t2.jpg" alt="" />
                </div>
                <div className="social_box">
                  <Link to="/">
                    <img src="images/facebook-logo.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/twitter.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/instagram-logo.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h5>Alex Den</h5>
                </div>
                <div className="img-box">
                  <img src="images/t3.jpg" alt="" />
                </div>
                <div className="social_box">
                  <Link to="/">
                    <img src="images/facebook-logo.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/twitter.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/instagram-logo.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end trainer section -->

  <!-- contact section --> */}

      <section className="contact_section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src="images/contact-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-flex ">
                    <button>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
