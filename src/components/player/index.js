import React from 'react';
import ReactPlayer from "react-player";

function Player() {
    return (
        <div>
            <ReactPlayer
                playing
                muted
                loop
                width= "100%"
                height = "100vh"
                url="https://www.youtube.com/watch?v=WEuzLkXc2Vk"
            />
        </div>
    );
};


export default Player