import React from 'react';
import { Link } from 'react-router-dom';

import NavbarComponent from './ui-components/NavbarComponent';
import './landing.css';

const Landing = () => {

    return (
      <div>
        <NavbarComponent />
        <div class="carouselDiv">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.reliablesoft.net/wp-content/uploads/2017/07/homepage-seo-ecommerce.jpg" height="550px" width ="100px"
                  class="d-block w-100"
                  alt="displayimg"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Online Shopping</h5>
                  <p>React Capstone Project</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.pretty-pages.com/wp-content/uploads/2018/10/facebook-online-shopping-post.jpg" height="550px" width ="100px"
                  class="d-block w-100"
                  alt="displayimg"
                />
                <div class="carousel-caption d-none d-md-block">
                <h5>Online Shopping</h5>
                  <p>React Capstone Project</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://mk0ethicalnetgpxgjkd.kinstacdn.com/wp-content/uploads/2019/11/thumbnail-onine-shopping.jpg" height="550px" width ="100px"
                  class="d-block w-100"
                  alt="displayimg"
                />
                <div class="carousel-caption d-none d-md-block">
                <h5>Online Shopping</h5>
                  <p>React Capstone Project</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <section class="text-center about">
          <h1>About US</h1>
          <div class="container">
            <div class="row">
              <div
                class="col-lg-4 col-sm-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="fa fa-group"></span>
                <h2>Fully functional</h2>
                <p class="lead">
                  Login to app to view all features available in the platform
                </p>
              </div>
              <div
                class="col-lg-3 col-sm-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="fa fa-info"></span>
                <h2>Statistics</h2>
                <p class="lead">
                  View the product statistics based on popularity
                </p>  
              </div>
              <div class="clearfix visible-md-block visible-sm-block"></div>
              <div
                class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="fa fa-shopping-cart"></span>
                <h2>Shop products</h2>
                <p class="lead">
                  Select from a wide range of available products
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
           
          </section>
        </div>
        <footer className="bg-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-6">
                <p class="copyright-text">
                  &copy; Product Mart 2020 All Rights Reserved
                  <br />
                  Designed by Shine Xavier.
                </p>
              </div>
           
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Landing;