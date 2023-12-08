import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all"; // Import Draggable from 'gsap/all'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import '../App.css'; 

gsap.registerPlugin(Draggable);


const Weather = () => {
  const leftAnimation = useRef(null);
  const rightAnimation = useRef(null);
  const cloudLeftAnimation = useRef(null);
  const cloudRightAnimation = useRef(null);
  const hiddenTextRef = useRef(null);


  useEffect(() => {
    // GSAP animations for temperature and weather icon
    gsap.fromTo(leftAnimation.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });
    gsap.fromTo(rightAnimation.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5 });

    // GSAP animations for clouds
    gsap.fromTo(cloudLeftAnimation.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
    gsap.fromTo(cloudRightAnimation.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });

    // Make clouds draggable
    Draggable.create(cloudLeftAnimation.current, { type: "x,y", bounds: "body" });
    Draggable.create(cloudRightAnimation.current, { type: "x,y", bounds: "body" });

    gsap.fromTo(hiddenTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
  }, []);

 

  return (
    <section className="vh-100 weather-container">
      <MDBContainer className="h-100 weather-content">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard className="mb-4" style={{ borderRadius: "25px", background: "none" }}>
              <MDBCardBody className="p-4">
                <div className="text-center">
                  <h2 className="display-2" ref={leftAnimation}>
                    <strong>17°C</strong>
                  </h2>
                  <p className="text-muted">Tunisia, Sousse</p>
                </div>
                <div className="d-flex justify-content-center pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                    width="220px"
                    ref={rightAnimation}
                    alt="Weather Icon"
                  />
                </div>
                <div className="d-flex justify-content-center pb-2">
                  <img
                    src="../assets/img/cloud.png"
                    alt="Cloud Left"
                    className="cloud-image"
                    ref={cloudLeftAnimation}
                  />
                  <img
                    src="../assets/img/cloud.png"
                    alt="Cloud Right"
                    className="cloud-image"
                    ref={cloudRightAnimation}
                    />
                 
              </div>
              <div className="absolute-center" ref={hiddenTextRef}>
                  <p className="hidden-text">Hey there, keep nature safe please.</p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Weather;
