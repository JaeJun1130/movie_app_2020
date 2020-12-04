import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
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
width:80rem;
height:45rem;
position: relative;
border:1px solid red;
`;

const PosterImg = styled.div`
background-image:url(${props=>props.src});
background-size:cover;
background-position:center center;
position:absolute;
width:30%;
height:100%;
`;

const Title = styled.span`
position:absolute;
margin-top:10rem;
margin-left:25rem;
font-weight:600;
font-size:45px;
color:#f8f8ff;
`;

const Genres = styled.span`
position:absolute;
margin-top:15rem;
margin-left:26rem;
color:#f8f8ff;
font-size:17px;
`;

const Button = styled.button`
position:absolute;
margin-top:19rem;
margin-left:26rem;

background-color: #f8585b;
border: none;
color:#fff;
padding: 15px 30px;
font-size: 18px;
border-radius:10px;
cursor: pointer;
`;


class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // history.push("/");
    }
  }
   buttonEvent = () => {
     const {location} = this.props;
    location.href={`https://www.youtube.com/watch?v=${location.state.trailer}`}
   }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <Wrapper  src={`${location.state.background_image}`}>
      <ContentBox>
        <PosterImg src={`${location.state.poster}`}/>
        <Title>{location.state.title} ({location.state.year})</Title>
    <Genres>{location.state.genres}&nbsp;&nbsp;📅{location.state.slug}&nbsp;&nbsp;⭐{location.state.rating}/10</Genres>
        <Button onClick={this.buttonEvent}>trailer</Button>
      </ContentBox>
      </Wrapper>


    } else {
      return null;
    }
  }
}

export default Detail;
