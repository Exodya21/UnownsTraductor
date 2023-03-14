import { useEffect, useState } from 'react';
import './styles/App.css';
import 'animate.css';
import { Mesage } from './components/Mesage'
import { Slider } from './components/Slider'
import { Slider2 } from './components/Slider2';
import { Slider3 } from './components/Slider3';
import { AbcUnowns } from './components/AbcUnowns';
import { Slider4 } from './components/Slider4';
import { Slider5 } from './components/Slider5';
import { PlayerFlauta } from './components/PlayerFlauta';
import { PlayerMusic } from './components/PlayerMusic';
import { PlayerTraduccion } from './components/PlayerTraduccion';

function App() {

  const [query, setQuery] = useState("");
  const [state, setState] = useState(true);
  const [theresUnown, setTheresUnown] = useState(false);
  // const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");


  // setTimeout(() => {
  //   audio.play() 
  // }, 1000);


  const onSubmit = (e) => {
    e.preventDefault()

    console.log(query)

    setState(false)
  }

  return (
    <div>
    {
      state?
      <div className="container">
        <div className="containerFlex animate__animated animate__fadeIn">
          <div>
            <h1>¡Bienvenido a las Ruinas Sosiego!</h1>
            <h3>Parece ser que posees una pokeflauta con forma de un Unown.</h3>
          </div>
          {
          theresUnown?
            <section>
              <AbcUnowns />

              <form onSubmit={onSubmit} className="animate__animated animate__fadeInRight">
                <h2>¡Ahora puedes controlar a tú antojo a los Unowns!</h2>
                <h3>Prueba a escribir cualquier cosa.</h3>
                <textarea
                  value={query}
                  placeholder="Cualquier cosa ..."
                  onChange={e => setQuery(e.target.value) }
                  required
                ></textarea>
                <h4>Cuando estés listo vuelve a tocar la pokeflauta.</h4>
                {/* <button className="animate__animated animate__pulse animate__infinite	infinite" type='submit'>Tocar la flauta</button> */}

                <PlayerTraduccion 
                  url={"https://firebasestorage.googleapis.com/v0/b/db-portfolio-angular.appspot.com/o/flautaCelestial.mp3?alt=media&token=f9425d8c-db11-4778-8666-54b44d9f5865"}
                  content={"Tocar la flauta"}
                />
              </form>
            </section> 
            :
            <div className='btnFlauta'>
              {/* <button 
                id="btn_princ" 
                onClick={()=> btnAnimation() } 
                className={
                   "animate__animated "+ css
                }
              >
                Tocar la flauta
              </button> */}
              <PlayerFlauta 
                url={"https://firebasestorage.googleapis.com/v0/b/db-portfolio-angular.appspot.com/o/flautaCelestial.mp3?alt=media&token=f9425d8c-db11-4778-8666-54b44d9f5865"}
                setTheresUnown={setTheresUnown}
                content={"Tocar la flauta"}
              />
            </div>
          }

          <Slider />
          <Slider2 />
          <Slider3 />
          <Slider4 />
          <Slider5 /> 

          <footer>
            <p>gif of Unown by </p>
            <a href="https://imgur.com/a/WXSvn#uD39I8E">imgur</a>
            <PlayerMusic 
              url={"https://firebasestorage.googleapis.com/v0/b/db-portfolio-angular.appspot.com/o/musicaAmbiente.mp3?alt=media&token=e3b9eefe-e1e2-41df-94dc-3a741b85f013"}
              content={"Musica de Ambiente:"}
            />
          </footer>
        </div>
      </div>      
      :
        <Mesage
          setState={setState}
          query={query}
        />
    }
    </div>
    
  );
}

export default App;
