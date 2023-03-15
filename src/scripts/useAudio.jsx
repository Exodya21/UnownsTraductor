import { useState, useEffect } from "react";

export const useAudio = (url, volume, loop) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    audio.volume = volume;
    audio.loop = loop;

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing] );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};