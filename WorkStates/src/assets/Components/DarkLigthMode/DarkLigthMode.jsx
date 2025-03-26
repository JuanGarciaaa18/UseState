import React from "react";
import "./DarkLigthMode.css";

export const DarkLightMode = ({ isDarkMode, setIsDarkMode, setBgColor }) => {
    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        setBgColor(prevMode => (prevMode === "#222222" ? "#FFFFFF" : "#222222")); // Cambia el fondo según el modo
    };

    return (
        <div className="dark-light-container">
            <button className="toggle-button" onClick={toggleMode}>
                {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
        </div>
    );
};
