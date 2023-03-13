import { useState } from 'react';
import './styles/App.css';
import 'animate.css';
import { Mesage } from './components/Mesage'
import { Slider } from './components/Slider'
import { Slider2 } from './components/Slider2';
import { Slider3 } from './components/Slider3';
import { AbcUnowns } from './components/AbcUnowns';
import { Slider4 } from './components/Slider4';

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

          <Slider />
          <Slider2 />
          <Slider3 />
          <Slider4 />

          <h1>¡Conoce a los Unowns!</h1>
          <section>

            <AbcUnowns />

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
