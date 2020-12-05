import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const PopupContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
`;

const Popup_inner = styled.div`
    width: 640px;
    height: 390px;

    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    border-radius: 20px;
`;

const CloseButton = styled.button`
    background-color: #7f8c8d;
    border: none;
    color: #fff;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
`;

class Popup extends React.Component {
    render() {
        const { text, closePopup, videoId } = this.props;
        const opts = {
            height: "390",
            width: "640",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        return (
            <PopupContainer>
                <Popup_inner>
                    <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
                    <h1>{text}</h1>
                    <CloseButton onClick={closePopup}>Close</CloseButton>
                </Popup_inner>
            </PopupContainer>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default Popup;
