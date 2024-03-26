import React from 'react'
import { useSpring, animated } from "react-spring";
const DayOne = () => {
    const styles = useSpring({
        from: {
            x: 0,
            y: 0,
            opacity:0,
        },
        to: {
            x: 100,
            y:100,
            opacity: 1
        }, 
        config: 10000
    })
    const ballStyle = useSpring({
        from:{
            width: "200px",
            height: "200px",
            backgroundColor: "red",
            x: 0,
            borderRadius: "50%",
        },
        to:{
            x: 700
        },
        config:30000
    })
    return (
        <div>
            <animated.div style={styles}>
                Hello, This is the first step!!
            </animated.div>
            <animated.div style={ballStyle}>

            </animated.div>
        </div>
    )
}

export default DayOne