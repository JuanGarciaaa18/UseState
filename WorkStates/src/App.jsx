import { useState, useEffect } from "react";
import { GenerateColors } from "./assets/Components/coloresAbsolutos/coloresAbsolutos";
import { DarkLightMode } from "./assets/Components/DarkLigthMode/DarkLigthMode";
import { LikesDislikes } from "./assets/Components/LikesDislikes/LikesDislikes";
import { Time } from "./assets/Components/Time/time";
import './index.css';

export const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [bgColor, setBgColor] = useState("#FFFFFF"); // Estado del fondo

    // Efecto para cambiar el fondo de la página al cambiar el modo o el color
    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

    return (
        <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`} style={{ backgroundColor: bgColor }}>
            <DarkLightMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setBgColor={setBgColor} />
            <GenerateColors setBgColor={setBgColor} />
            <LikesDislikes />
            <Time />
        </div>
    );
};
