import { useAudio } from "../scripts/useAudio";
import '../styles/App.css';
import 'animate.css';
import { useState } from "react";

export const PlayerFlauta = ({ url, content, setTheresUnown }) => {
    const [playing, toggle] = useAudio(url, "0.05", false);
    const [css, setCss] = useState('animate__pulse animate__infinite infinite')


    const actions = () => {
        setCss('animate__fadeOutUp')

        toggle()

        setTimeout(() => {
            setTheresUnown(true);
        }, 2000);
    }

    return (
        <div>
            <button id="btn_princ" className={ "animate__animated "+css } onClick={actions} >
                { content }
            </button>
        </div>
    );
}