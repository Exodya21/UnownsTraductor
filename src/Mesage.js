import { animations } from './gifAnimationCSS';
import './App.css';
import 'animate.css';
import { security } from './security';
import { unownsFilter } from './unownsFilter';

export function Mesage( { setState, query } ) {

  query = unownsFilter(security(query))
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="containerRes">
      <header > 
        <button className="animate__animated animate__fadeIn" onClick={() => setState(true)} > back </button>
      </header>
      
      <h2 >¡Te animo a que le hagas una screenshot o un video de esta traducción y la compartas!</h2>
      <small>Para mejor visibilidad te recomiendo voltear tu smartphone. Y si estas en ordenador puedes hacer zoom para verlo mejor :D</small>

      <div  className="animate__animated animate__fadeIn flexUnowns">
      {
        query?.map( (unown, index) => (
          <div key={index} atrr={unown.name} className={ animations[getRandomInt(animations.length-1)] }>
            <img src={unown.img} alt={unown.name}></img>
          </div>
        ))
      }
      </div>
    </div>
  )
}