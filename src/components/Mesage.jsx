import { animations } from '../dataBases/gifAnimationCSS';
import '../styles/App.css';
import 'animate.css';
import { security } from '../scripts/security';
import { unownsFilter } from '../scripts/unownsFilter';

export function Mesage( { setState, query } ) {

  query = unownsFilter(security(query))
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="containerRes ">
      <header className='animate__animated animate__fadeIn'> 
        <button className="animate__animated animate__pulse animate__infinite	infinite" onClick={() => setState(true)} > back </button>
      </header>
      
      <div className='mesage_titles'>
        <h2 className='animate__animated animate__fadeIn' >¡Te animo a que le hagas una screenshot o un video de esta traducción y la compartas!</h2>
        <small className='animate__animated animate__fadeIn' >Para mejor visibilidad te recomiendo voltear tu smartphone. Y si estas en ordenador puedes hacer zoom para verlo mejor :D</small>
      </div>

      <div className="animate__animated animate__fadeIn flexUnowns">
      {
        query?.map( (unown, index) => (
          <div key={index} atrr={unown.name} className={ animations[getRandomInt(animations.length-1)] }>
            <img src={unown.img} alt={unown.name}></img>
          </div>
        ))
      }
        {/* <div atrr={"unown-s"} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[0].img} alt={query[0].img}></img>
        </div> 
        <div atrr={"unown-s"} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[0].img} alt={query[0].img}></img>
        </div> 
        <div atrr={"unown-s"} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[0].img} alt={query[0].img}></img>
        </div> 
        <div atrr={" "} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[1].img} alt={query[0].img}></img>
        </div> 
      <div className='prueba'>

        <div atrr={"unown-s"} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[2].img} alt={query[2].img}></img>
        </div> 
        <div atrr={"unown-s"} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[2].img} alt={query[2].img}></img>
        </div> 
        <div atrr={"unown-s"} className={ animations[getRandomInt(animations.length-1)] }>
          <img src={query[2].img} alt={query[2].img}></img>
        </div> 
      </div> */}

      </div>
    </div>
  )
}