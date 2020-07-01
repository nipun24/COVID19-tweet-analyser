

import React from 'react'
import ReactPlayer from 'react-player'

const Home = (props) => {
    return (
        <ReactPlayer 
            url='https://youtu.be/9Uq2RJQUvew'
            loop = {true}
            width='100%'
            height='100%'
            playing = {true}
        />
    )
}
export default Home
