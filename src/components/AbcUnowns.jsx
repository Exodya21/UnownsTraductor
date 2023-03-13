import { unowns } from "../dataBases/gif";
import 'animate.css';
import { animationABCwithDELAY, animationsABCWithOutDelay } from "../dataBases/gifAnimationCSS";
import { useState } from "react";

export function AbcUnowns() {

    const [animations] = useState(animationsABCWithOutDelay)

    if (unowns.length === 29) unowns.pop()

    console.log(animations);

    // document.querySelector('#u').style.setProperty('--animate-duration', '2s');

    return (
        <div className='gifs' >
            {
            // eslint-disable-next-line array-callback-return
            unowns?.map( (unown, index) => (
                <div key={unown.name} index={index} className="unown">
                    <div id="u" className={animations[index]}>
                        <p>Letra {unown.char}</p>
                        <img src={unown.img} alt={unown.name}></img>
                    </div>
                </div>
            ))
            }
            
            {/* <div className="unown">
                <div id="u" className={"animate__animated animate__fadeInDownBig animate__delay-1s"}>
                    <p>Letra {unowns[0].char}</p>
                    <img src={unowns[0].img} alt={unowns[0].name}></img>
                </div>
            </div>
            <div className="unown">
                <div id="u" className={"animate__animated animate__fadeInDownBig animate__delay-2s"}>
                    <p>Letra {unowns[1].char}</p>
                    <img src={unowns[1].img} alt={unowns[1].name}></img>
                </div>
            </div> */}

        </div>
    )
}