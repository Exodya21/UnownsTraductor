const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export const animations = [
    `animate__animated animate__backInDown animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__backInLeft animate__delay`,
    `animate__animated animate__backInRight  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__backInUp  animate__delay-${getRandomInt(3)}s`,

    `animate__animated animate__bounceInDown  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__bounceInLeft  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__bounceInRight  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__bounceInUp  animate__delay-${getRandomInt(3)}s`,

    `animate__animated animate__fadeInDown  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInDownBig  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInLeft  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInLeftBig  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInRight  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInRightBug  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInUp  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInUpBig  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInTopLeft  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInTopRight  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInBottomLeft  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__fadeInBottomRight  animate__delay-${getRandomInt(3)}s`,

    // `animate__animated animate__lightSpeedInRight  animate__delay-${getRandomInt(3)}s`,
    // `animate__animated animate__lightSpeedInLeft  animate__delay-${getRandomInt(3)}s`,
    // `animate__animated animate__lightSpeedOutRight  animate__delay-${getRandomInt(3)}s`,
    // `animate__animated animate__lightSpeedOutLeft  animate__delay-${getRandomInt(3)}s`,

    `animate__animated animate__rollIn  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__rollOut  animate__delay-${getRandomInt(3)}s`,

    `animate__animated animate__zoomIn  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__zoomInDown  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__zoomInLeft  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__zoomInRight  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__zoomInUp  animate__delay-${getRandomInt(3)}s`,

    `animate__animated animate__zoomInUp  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__slideInLeft  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__slideInRight  animate__delay-${getRandomInt(3)}s`,
    `animate__animated animate__slideInUp  animate__delay-${getRandomInt(3)}s`,
]