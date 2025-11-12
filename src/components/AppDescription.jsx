import BackgroundGradient from "./BackgroundGradient";

export default function AppDescription({ path, title, description, colors }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 hover:-translate-y-1 duration-500 cursor-pointer relative">
                <span className="max-w-[70px] max-h-[70px]">
                    <img className="h-full w-full" src={path} alt="Icon" />
                </span>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-300 text-center text-sm">
                    {description}
                </p>
                <div className="w-full h-full absolute opacity-0 hover:opacity-100 duration-500">
                    <BackgroundGradient
                        size="w-40 h-40"
                        blur="blur-[100px]"
                        position="top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        gradientColor="rgba(125, 205, 125, 0.5),rgba(205, 105, 105, 0.1)"
                        animation={false}
                    />
                </div>
            </div>
        </>
    );
}
