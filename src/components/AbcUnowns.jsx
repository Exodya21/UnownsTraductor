import { unowns } from "../dataBases/gif";
import 'animate.css';
import { animationsABCWithOutDelay } from "../dataBases/gifAnimationCSS";
import { useState } from "react";

export function AbcUnowns() {

    const [animations] = useState(animationsABCWithOutDelay)

    if (unowns.length === 29) unowns.pop()

    // console.log(animations);

    return (
        <div className='gifs' >
            {
            unowns?.map( (unown, index) => (
                <div key={unown.name} index={index} className="unown">
                    <div className={animations[index]}>
                        <p>Letra {unown.char}</p>
                        <img src={unown.img} alt={unown.name}></img>
                    </div>
                </div>
            ))
            }
            
            {/* <div className="unown">
                <div id="u" className={"animate__animated animate__jello animate__infinite	infinite"}>
                    <p>Letra {unowns[0].char}</p>
                    <img src={unowns[0].img} alt={unowns[0].name}></img>
                </div>
            </div> */}
            

        </div>
    )
}