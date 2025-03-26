import React from "react";

const coloresAbsolutos = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", 
    "#00FFFF", "#000000", "#FFFFFF", "#808080", "#800000", 
    "#808000", "#800080", "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const GenerateColors = ({ setBgColor }) => {
    const generarColor = () => {
        const randomIndex = Math.floor(Math.random() * coloresAbsolutos.length);
        const selectedColor = coloresAbsolutos[randomIndex];
        setBgColor(selectedColor);
     
    };

    return (
        <div className="generate-colors">
            <button className="color-button" onClick={generarColor}>
                Generar Color
            </button>
        </div>
    );
};
