import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Youtube from "../components/YoutubeApi";
import Popup from "../components/Popup";
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    z-index: 100;
    width: 80rem;
    height: 45rem;
    position: relative;
`;

const PosterImg = styled.div`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center center;
    position: absolute;
    width: 30%;
    height: 100%;
`;

const Title = styled.span`
    position: absolute;
    margin-top: 10rem;
    margin-left: 25rem;
    font-weight: 600;
    font-size: 45px;
    color: #f8f8ff;
`;

const Genres = styled.span`
    position: absolute;
    margin-top: 18rem;
    margin-left: 26rem;
    color: #f8f8ff;
    font-size: 17px;
`;

const Button = styled.button`
    position: absolute;
    margin-top: 20rem;
    margin-left: 26rem;

    background-color: #f8585b;
    border: none;
    color: #fff;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
`;

const SummaryContainer = styled.div`
    width: 30vw;
    height: 30vh;
    position: absolute;
    top: 55%;
    left: 35%;
`;

const Synopsis = styled.h1`
    color: white;
`;

const Summary = styled.p`
    font-size: 15px;
    color: white;
    opacity: 0.7;
`;

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <Wrapper src={`${location.state.background_image}`}>
                    <ContentBox>
                        <PosterImg src={`${location.state.poster}`} />
                        <Title>
                            {location.state.title} ({location.state.year})
                        </Title>
                        <Genres>
                            📅{location.state.slug}&nbsp;&nbsp;⭐
                            {location.state.rating}/10&nbsp;&nbsp;⏰{location.state.runtime}&nbsp;minute
                        </Genres>
                        <Fragment>
                            <Button onClick={this.togglePopup.bind(this)}>trailer</Button>
                            {this.state.showPopup ? (
                                <Popup videoId={location.state.trailer} closePopup={this.togglePopup.bind(this)} />
                            ) : null}
                        </Fragment>
                        +
                        <SummaryContainer>
                            <Synopsis>Synopsis</Synopsis>
                            <Summary>{location.state.summary}</Summary>
                        </SummaryContainer>
                    </ContentBox>
                </Wrapper>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
