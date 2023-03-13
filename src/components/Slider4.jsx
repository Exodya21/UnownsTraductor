import '../styles/animations.css';
import { useState } from 'react';
import { unowns } from "../dataBases/gif";


export function Slider4() {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    const [num] = useState(getRandomInt(unowns.length-1));

    return (
        <div className='container-slider'> 
            <div className='slider4' >
                <div>                    
                    <img className='slide4' src={unowns[num].img} alt={[num].name}></img>
                </div>
            </div>
        </div>
    )
}