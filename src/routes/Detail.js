import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
width:100vw;
height:100vh;background-image:url(${props=>props.src});
background-size:cover;
background-position:center center;

display:flex;
justify-content:center;
align-items:center;
`;

const ContentBox = styled.div`
z-index:100;
width:50rem;
height:30rem;
`;

const PosterImg = styled.div`
width:5rem;
height:10rem;
background-image:url(${props=>props.src});
background-size:cover;
background-position:center center;


`;


class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <Wrapper  src={`${location.state.background_image}`}>
      <ContentBox>
        <PosterImg src={`${location.state.poster}`}/>
      </ContentBox>
      </Wrapper>


    } else {
      return null;
    }
  }
}

export default Detail;
