import { animations } from './gifAnimationCSS';
import './App.css';
import 'animate.css';
import { security } from './security';
import { unownsFilter } from './unownsFilter';
import html2canvas from 'html2canvas';

export function Mesage( { setState, query } ) {

  let css = '';
  // let css = 'unown containerRes1 ';
  query = unownsFilter(security(query))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const screenShot = () => {
    let div = document.getElementById('unowns');
  
    html2canvas(div).then(
      function (canvas) {
          document
          .getElementById('output')
          .appendChild(canvas);
      })
  }

  return (
    <div className="containerRes">
      <header > 
        <button className="animate__animated animate__fadeIn" onClick={() => setState(true)} > back </button>
        {/* <button id="download" onClick={()=>screenShot()}>Tomar screenshot y descargar</button> */}
      </header>
      
      <h2 >Te animo a que le hagas una screenshot o un video de esta traducción</h2>
      <small>Para mejor visibilidad te recomiendo voltear tu smartphone</small>

      <div  className="animate__animated animate__fadeIn flexUnowns">
      {
        query?.map( (unown, index) => (
          <div key={index} atrr={unown.name} className={css + animations[getRandomInt(animations.length-1)]}>
            {/* <p>Letra {unown.char}</p> */}
            <img src={unown.img} alt={unown.name}></img>
          </div>
        ))
      }
      </div>
      {/* <div id='output'></div> */}
    </div>
  )
}