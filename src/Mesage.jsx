import { animations } from './gifAnimationCSS';
import './App.css';
import 'animate.css';

export function Mesage( { setState, unownsFiltred} ) {

    let css = 'unown containerRes ';


    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className="containerRes">
          <header>
            <button className="animate__animated animate__fadeIn" onClick={() => setState(true)} > back </button>
          </header>
          
          <div className="animate__animated animate__fadeIn">
          {
            unownsFiltred.map( unown => (
              <div key={unown.name}  className={css + animations[getRandomInt(animations.length-1)]}>
                 <p>Letra {unown.char}</p>
                <img src={unown.img} alt={unown.name}></img>
              </div>
            ))
          }
          {
            console.log(unownsFiltred)
          }
          </div>
        </div>
    )
}