import React, { useState, useEffect } from 'react';


const coloresAbsolutos = [
    "#FF0000",     // Rojo
    "#00FF00",     // Verde
    "#0000FF",     // Azul
    "#FFFF00",     // Amarillo
    "#FF00FF",     // Magenta
    "#00FFFF",     // Cian
    "#000000",     // Negro
    "#FFFFFF",     // Blanco
    "#808080",     // Gris
    "#800000",     // Marrón oscuro
    "#808000",     // Oliva
    "#800080",     // Púrpura
    "#008080",     // Verde azulado
    "#C0C0C0",     // Plata
    "#FFA500",     // Naranja
    "#A52A2A"      // Marrón
];

export const GenerateColors = () => {
    const [color, setColor] = useState("#FFFFFF"); // Color inicial (blanco)

    const generarColor = () => {
        const randomIndex = Math.floor(Math.random() * coloresAbsolutos.length);
        const selectedColor = coloresAbsolutos[randomIndex];
        setColor(selectedColor);
        alert(`El color generado es: ${selectedColor}`);
    };

    // Cambiar el color de fondo del body dinámicamente
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button onClick={generarColor} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "#333", color: "#FFF" }}>
                Generar Color
            </button>
        </div>
    );
};