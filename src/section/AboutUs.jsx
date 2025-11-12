import React from "react";
import Logo from "../assets/icon/SoftGame Logo.svg";
import BackgroundGradient from "../components/BackgroundGradient";
import DecorElements from "../components/DecorElements/DecorElements";
import { BgIcon } from "../assets/icon/index.js";
export default function AboutUs() {
    return (
        <section
            id="about-us"
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full text-white min-h-screen relative flex items-center justify-center"
        >
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
                {/* Левая часть — текст */}
                <div className="max-w-[550px] w-full min-w-0">
                    <p className="text-gray-400 text-lg mb-2">О нас</p>
                    <h2 className="text-5xl font-semibold leading-tight mb-6">
                        Привет, <br /> мы{" "}
                        <span className="text-white font-bold">
                            SoftGame Studio.
                        </span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        В нашей студии мы превращаем идеи в уникальные цифровые
                        продукты. Мы специализируемся на разработке игр,
                        мобильных приложений и веб-сайтов, обеспечивая полный
                        цикл создания — от концепции до запуска.
                    </p>
                </div>

                {/* Правая часть — логотип */}
                <div className="flex items-center flex-1 min-w-[300px]">
                    <img
                        src={Logo}
                        alt="SoftGame Studio Logo"
                        className="w-full h-auto opacity-90"
                    />
                </div>
                {[
                    {
                        icon: BgIcon.BgIcon1,
                        position: "-left-20 top-0  w-30 md:w-auto",
                    },
                    {
                        icon: BgIcon.BgIcon2,
                        position:
                            "right-0 bottom-0 md:bottom-20 md:-right-20  w-30 md:w-auto",
                    },
                ].map(({ icon, position }, index) => (
                    <DecorElements
                        key={index}
                        path={icon}
                        position={position}
                        delay={Math.random() * 3}
                        duration={1 + Math.random() * 2}
                    />
                ))}
            </div>

            <BackgroundGradient
                position="top-0 left-[60%] -translate-x-1/2 -translate-y-1/2"
                gradientColor="rgba(255, 169, 0, 0.5) 0%, rgba(224, 86, 136, 0.5) 100%"
                size="w-[400px] h-[500px]"
                blur="blur-[200px]"
                opacity="opacity-10"
                duration={15}
            />

            <BackgroundGradient
                position="bottom-[20%] left-[40%] -translate-x-1/2 -translate-y-1/2"
                gradientColor=" #0ff 0%, rgba(251, 190, 70, 0.5)"
                size="w-[200px] h-[300px]"
                blur="blur-[100px]"
                opacity="opacity-50"
                duration={3}
            />
        </section>
    );
}
