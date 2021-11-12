import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src="https://avatars.githubusercontent.com/u/41640377?s=400&u=52e84073f491c01660fd3597a5ea8f9aa74a1237&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Roberto Monplaisir"
          />
          <p style={{ fontSize: "27px" }}>
            Hi, my name is Roberto Monplaisir. I was born and raised
            in Brooklyn, NY, and it is currently the place I still call
            home. I am a husband to a beautiful wife, and a father to two
            lovely daughters. I began my adventure in tech at TCI Techincal
            College where I graduated with an associates in Electronic Engineering
            Technology. It was there that I begin my engagements with computer programming.
            I started off with C ++, and from there I dabbled with Python and Visual Basics.
            Currently I am studying to be a full stack Web Developer at Columbia University
            and will hopefully receive a certificate of completion.
          </p>
          <p style={{ fontSize: "27px" }}>
            I am proficient with the front end of thing which includes HTML,
            CSS, Bootstrap, Javascript, and jQuery. As far as the back end
            is concerned, I am proficient in Mongoose, SQL, Express, Node, and 
            React. I definitley intend to lear more as seek to become competitive.
        
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
