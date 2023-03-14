import '../styles/animations.css';
import { unowns } from "../dataBases/gif";
import { useState } from 'react';


export function Slider5() {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    const [num] = useState(getRandomInt(unowns.length-1));


    return (
        <div className='container-slider'> 
            <div className='slider5' >
                <img className='slide5' src={unowns[num].img} alt={[num].name}></img>
            </div>
        </div>
    )
}