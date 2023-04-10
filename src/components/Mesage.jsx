import { animations } from '../dataBases/gifAnimationCSS';
import '../styles/App.css';
import 'animate.css';
import { security } from '../scripts/security';
import { unownsFilter } from '../scripts/unownsFilter';
import { wordSpacing } from '../scripts/wordSpacing';

export function Mesage( { setState, query } ) {

  let wordArray = wordSpacing(query) //Convierte el string en una lista de palabras

  let sentenceSecurity = wordArray.map( word =>  security(word) ) // Parseo cada palabra por seguridad

  let sentenceUnowns = sentenceSecurity.map( wordSecurity => unownsFilter(wordSecurity) ) // Construyo mi lista de la frase que contiene listas de cada palabra y cada palabra tiene un unown

  console.log(sentenceSecurity);
  console.log(sentenceUnowns);


  query = unownsFilter(security(query))
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="containerRes ">
      <header className='animate__animated animate__fadeIn'> 
        <button className="animate__animated animate__pulse animate__infinite	infinite" onClick={() => setState(true)} > back </button>
      </header>
      
      

      <div className="animate__animated animate__fadeIn flexUnowns">
        <div className='mesage_titles'>
          <h2 className='animate__animated animate__fadeIn' >¡Te animo a que le hagas una screenshot o un video de esta traducción y la compartas!</h2>
          <small className='animate__animated animate__fadeIn' >Para mejor visibilidad te recomiendo voltear tu smartphone :D</small>
        </div>
      {
        sentenceUnowns?.map( (word, index) => (
          <div className='wordUnown'>
            {
              word.map( unown => (
                <div key={index} atrr={unown.name} className={ animations[getRandomInt(animations.length-1)] }>
                  <img src={unown.img} alt={unown.name}></img>
                </div>
              ))
            }
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