import { useState } from 'react';
import './App.css';
// import abcInfografia from "./asets/abc-unowns.png";
import {unowns} from "./gif";

function App() {

  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  return (
    <div className="container">
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
          ></textarea>
          <button type='submit'>Traducir</button>
        </form>

      </section>
      <footer>
        <p>gif of Unown by </p>
        <a href="https://imgur.com/a/WXSvn#uD39I8E">imgur</a>
      </footer>
    </div>
  );
}

export default App;
