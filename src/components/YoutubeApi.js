import React from "react";
import YouTube from "react-youtube";

import Detail from "../routes/Detail";
class YouTubeApi extends React.Component {
    state = {
        videoId: null,
    };
    render() {
        const { videoId } = this.state;
        const opts = {
            height: "390",
            width: "640",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default YouTubeApi;
