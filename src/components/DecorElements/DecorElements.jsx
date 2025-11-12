import DecorStyle from "./DecorElements.module.css";

export default function DecorElements({
    path,
    position,
    delay = 0,
    duration = 5,
}) {
    return (
        <img
            src={path}
            className={`opacity-60 absolute ${position} z-250 ${DecorStyle.animate_float}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}
        />
    );
}
