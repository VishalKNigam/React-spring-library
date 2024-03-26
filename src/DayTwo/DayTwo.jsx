import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const DayTwo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const spring = useSpring({
        from: { x: 0 },
        to: { x: isHovered ? 500 : 0 },
        config: { duration: 2000 }
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <animated.div
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "pink",
                    borderRadius: "50%",
                    position: "relative",
                    left: spring.x.interpolate(x => `${x}px`) 
                    // Interpolate the value to ensure proper unit
                }}
            >
                Hello, This is the first step!!
            </animated.div>
        </div>
    );
};

export default DayTwo;
