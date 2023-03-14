import { useAudio } from "../scripts/useAudio";
import '../styles/App.css';
import 'animate.css';

export const PlayerMusic = ({ url, content }) => {
    const [playing, toggle] = useAudio(url, "0.015", true);

    return (
        <div>
            <button id="playerMusic" onClick={toggle} >
                { content }
                {playing ? " Pause " : " Play "}
            </button>
        </div>
    );
}