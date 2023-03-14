import { useState } from 'react';
import '../styles/animations.css';
import { unowns } from "../dataBases/gif";


export function Slider2() {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    const [nums] = useState([getRandomInt(unowns.length-1),getRandomInt(unowns.length-1),getRandomInt(unowns.length-1)]);

    return (
        <div className='container-slider'> 
            <div className='slider2' >
                <div>
                    <img className='slide' src={unowns[nums[0]].img} alt={[nums[0]].name}></img>
                </div>
                                    
                <div>
                    <img className='slide' src={unowns[nums[1]].img} alt={[nums[1]].name}></img>
                </div>      
            </div>
        </div>
    )
}