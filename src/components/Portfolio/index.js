import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/castedcrown84/prog-budg/blob/main/public/assets/images/budg.png?raw=true"
            alt="Budget-Tracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBCardText>
              As People who seek to Improve our financial wealth, we can track our income and expenses with this app.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/prog-budg"
              color="primary"
              size="md"
      
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="fitness-tracker">
          <MDBCardImage
            className="img-fluid"
            src="https://github.com/castedcrown84/fitness-trk/blob/main/public/images/fit.png?raw=true"
            alt="fitness-trk"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Fitness Tracker</MDBCardTitle>
            <MDBCardText>
              An app that allows the user to track their goals in physical training.
            
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/fit-trk"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://github.com/castedcrown84/note-pad/blob/main/2021-11-13%20(3).png?raw=true"
            alt="Note-Taker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note-Taker</MDBCardTitle>
            <MDBCardText>
              With this app the user can take notes, and use their notes in ways that can benefit them.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/note-pad"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://github.com/castedcrown84/Team-Generator/blob/main/2021-11-13%20(5).png?raw=true"
            alt="Team Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Team Profile Generator</MDBCardTitle>
            <MDBCardText>
              A command line application that allows the user to add and remove
              employees with their employee information
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/Team-Generator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://github.com/castedcrown84/pages2-port/blob/main/assets/images/weatheapp.png?raw=true"
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/weatherdashhw"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://github.com/castedcrown84/pages2-port/blob/main/assets/images/veggietakes.png?raw=true"
            alt="Bartender"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5"></MDBCardTitle>
            <MDBCardText>
            An app that allow the user to get the reviews and information about the latest movies out.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/Vegitate"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://github.com/castedcrown84/pages2-port/blob/main/assets/images/dayplanner.png?raw=true"
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
            <MDBCardText>
              This is a work day plan app. It has hours sections on it so when
              the user enters a description for each hour and save it the
              description will stay until erased.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/dayplannerhw"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://github.com/castedcrown84/pages2-port/blob/main/assets/images/proj2.png?raw=true"
            alt="Vitamin-store"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">MRA</MDBCardTitle>
            <MDBCardText>
              This app allows the user to purchase health products and a whole bunch of natural supplements.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/MRA-Vitamins/MRA-Vitamins-Store"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://github.com/castedcrown84/pages2-port/blob/main/assets/images/hori.png?raw=true"
            alt="horiseon"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Horiseon</MDBCardTitle>
            <MDBCardText>
              This is a developed web page for a company called Horiseon.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/castedcrown84/Horiseon"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;


