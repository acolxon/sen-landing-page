// components/BackgroundGradient.jsx
import React from "react";
import Style from "../style/animateBack.module.css";

export default function BackgroundGradient({
    position = "top-[20%] left-[10%]",
    gradientColor = "rgb(255 0 0 / 58%), rgb(255 247 28 / 67%)",
    size = "w-[600px] h-[600px]",
    blur = "blur-[200px]",
    duration = 5,
    delay = 0,
    animation = true,
}) {
    return (
        <div
            className={`absolute max-w-[90vw] max-h-[100vw] -z-100 rounded-full pointer-events-none ${position} ${size} ${blur} ${
                animation ? Style.float_animation : Style.hoverAppear
            }`}
            style={{
                background: `radial-gradient(circle at center, ${gradientColor})`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}
        ></div>
    );
}
