import '../styles/animations.css';
import { unowns } from "../dataBases/gif";


export function Slider3() {
    return (
        <div className='container-slider'> 
            <div className='slider3' >
                <div>                    
                    <img className='slide' src={unowns[26].img} alt={[26].name}></img>
                </div>
            </div>
        </div>
    )
}