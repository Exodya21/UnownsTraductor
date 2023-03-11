import { useState } from 'react';
import './App.css';
import 'animate.css';
import { unowns } from "./gif";
import { Mesage } from './Mesage'

function App() {

  const [query, setQuery] = useState("");
  const [state, setState] = useState(true);

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
          <h1>¡Conoce a los Unowns!</h1>
          <section>

            <div className='gifs' >
              {
                // eslint-disable-next-line array-callback-return
                unowns?.map( unown => (
                  <div key={unown.name} className='unown'>
                    <p>Letra {unown.char}</p>
                    <img src={unown.img} alt={unown.name}></img>
                  </div>
                ))
              }
            </div>

            <form onSubmit={onSubmit}>
              <h2>Escribe cualquier cosa con la ayuda de los Unowns</h2>
              <textarea
                value={query}
                onChange={e => setQuery(e.target.value) }
                required
              ></textarea>
              <button type='submit'>Traducir</button>
            </form>

          </section>
          <footer>
            <p>gif of Unown by </p>
            <a href="https://imgur.com/a/WXSvn#uD39I8E">imgur</a>
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
