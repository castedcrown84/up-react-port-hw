import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://github.com/castedcrown84/pages2-port/blob/main/assets/images/mypic.jpg?raw=true"
            class="pr-4 pb-3 img-fluid"
            alt="Robert Monplaisir"
          />
          <h4>
            I will gradate a Full Stack Web Development Bootcamp at the
            Columbia University. I will receive a certificate of completion from the
            University. Now I am actively looking for a Junior Web Development
            position, preferibly in the back end. Below I have linked my e-mail and cell phone number.
            Please feel free to contact me.
            
        
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:917-383-6482">
            <MDBIcon icon="phone-alt" /> 917-383-6482
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:castedcrown84@gmail.com">
            <MDBIcon icon="envelope" /> castedcrown84@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
