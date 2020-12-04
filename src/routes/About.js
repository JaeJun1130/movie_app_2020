import React, { Fragment } from "react";
import "./About.css";
import styled from "styled-components";
import img from "../idu.png";
const ImgBox = styled.div`
padding-top:15rem;
  width:100%;
  max-width:15rem;
  height:15rem;
  margin:0px auto;
  opacity:0.2;

`;

const Img = styled.img`
width:100%;
border: none;
`
;

function About(props) {
  console.log(props);
  return (
    <Fragment>    <div className="about__container">
    <span>
      "3B 1조 캡스톤"
      {<br></br>} 
       "전재준,박찬영,김진세"
       {<br></br>} 
      "정성진,최정규,이민호"
    </span>
    <span>− 인덕대학교 컴퓨터 소프트웨어학과</span>

  </div>
  <ImgBox>
  <Img src={img} />
</ImgBox>
          </Fragment>

  );
}

export default About;
