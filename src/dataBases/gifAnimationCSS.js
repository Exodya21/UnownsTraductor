const getRandomInt = (max) => {
    let num = Math.floor(Math.random() * max)
    if ( num > 0 ) return num
    return 1
}

export const animations = [
    `animate__animated animate__backInDown animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__backInLeft animate__delay`,
    `animate__animated animate__backInRight  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__backInUp  animate__delay-${getRandomInt(4)}s`,

    `animate__animated animate__bounceInDown  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__bounceInLeft  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__bounceInRight  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__bounceInUp  animate__delay-${getRandomInt(4)}s`,

    `animate__animated animate__fadeInDown  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInDownBig  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInLeft  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInLeftBig  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInRight  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInRightBug  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInUp  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInUpBig  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInTopLeft  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInTopRight  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInBottomLeft  animate__delay-${getRandomInt(4)}s`,
    `animate__animated animate__fadeInBottomRight  animate__delay-${getRandomInt(4)}s`,

    // `animate__animated animate__lightSpeedInRight  animate__delay-${getRandomInt(5)}s`,
    // `animate__animated animate__lightSpeedInLeft  animate__delay-${getRandomInt(5)}s`,
    // `animate__animated animate__lightSpeedOutRight  animate__delay-${getRandomInt(5)}s`,
    // `animate__animated animate__lightSpeedOutLeft  animate__delay-${getRandomInt(5)}s`,

    // `animate__animated animate__rollIn  animate__delay-${getRandomInt(5)}s`,
    // `animate__animated animate__rollOut  animate__delay-${getRandomInt(5)}s`,

    `animate__animated animate__zoomIn  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__zoomInDown  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__zoomInLeft  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__zoomInRight  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__zoomInUp  animate__delay-${getRandomInt(5)}s`,

    `animate__animated animate__zoomInUp  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__slideInLeft  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__slideInRight  animate__delay-${getRandomInt(5)}s`,
    `animate__animated animate__slideInUp  animate__delay-${getRandomInt(5)}s`,
]

let seconds = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 7, 7, 13, 12, 11, 10, 9, 8, 6, 5, 4, 3, 2, 1, 0]
// .map(num => num/4)
export let animationsABCWithOutDelay = [
    'animate__animated animate__fadeInDownBig animate__delay-0s',
    'animate__animated animate__fadeInDownBig animate__delay-1s',
    'animate__animated animate__fadeInDownBig animate__delay-2s',
    'animate__animated animate__fadeInDownBig animate__delay-3s',
    'animate__animated animate__fadeInDownBig animate__delay-4s',
    'animate__animated animate__fadeInDownBig animate__delay-5s',

    'animate__animated animate__fadeInTopRight animate__delay-1s',

    'animate__animated animate__fadeInTopLeft animate__delay-1s',

    'animate__animated animate__fadeInDownBig animate__delay-0s',
    'animate__animated animate__fadeInDownBig animate__delay-1s',
    'animate__animated animate__fadeInDownBig animate__delay-2s',
    'animate__animated animate__fadeInDownBig animate__delay-3s',
    'animate__animated animate__fadeInDownBig animate__delay-4s',
    
    'animate__animated animate__fadeInRight animate__delay-1s',

    'animate__animated animate__fadeInLeftBig animate__delay-1s',

    'animate__animated animate__fadeInUp animate__delay-5s',
    'animate__animated animate__fadeInUp animate__delay-4s',
    'animate__animated animate__fadeInUp animate__delay-3s',
    'animate__animated animate__fadeInUp animate__delay-2s',
    'animate__animated animate__fadeInUp animate__delay-1s',

    'animate__animated animate__fadeInBottomRight animate__delay-1s',

    'animate__animated animate__fadeInBottomLeft animate__delay-1s',

    'animate__animated animate__fadeInUp animate__delay-5s',
    'animate__animated animate__fadeInUp animate__delay-4s',
    'animate__animated animate__fadeInUp animate__delay-3s',
    'animate__animated animate__fadeInUp animate__delay-2s',
    'animate__animated animate__fadeInUp animate__delay-1s',
    'animate__animated animate__fadeInUp animate__delay-0s',
]
let animationsABC = [
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',

    'animate__animated animate__fadeInTopRight animate__delay-',

    'animate__animated animate__fadeInTopLeft animate__delay-',

    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    'animate__animated animate__fadeInDownBig animate__delay-',
    
    'animate__animated animate__fadeInRightBig animate__delay-',

    'animate__animated animate__fadeInLeftBig animate__delay-',

    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',

    'animate__animated animate__fadeInBottomRight animate__delay-',

    'animate__animated animate__fadeInBottomLeft animate__delay-',

    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
    'animate__animated animate__fadeInUpBig animate__delay-',
]

//10s
export const animationABCwithDELAY = () => {
    let res = []

    animationsABC.forEach((animation, index) => {
        let animationWhithDelay = animation + `${seconds[index].toString()}s`
        res.push(animationWhithDelay)
    });

    console.log(res);
    return res
}
