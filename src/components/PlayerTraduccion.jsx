import { useAudio } from "../scripts/useAudio";
import '../styles/App.css';
import 'animate.css';

export const PlayerTraduccion = ({ url, content }) => {
    const [playing, toggle] = useAudio(url, "0.05", false);

    return (
        <div>
            <button id="btn_princ" type="submit" className="animate__animated animate__pulse animate__infinite	infinite" onClick={toggle} >
                { content }
            </button>
        </div>
    );
}