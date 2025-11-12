import AboutAppInfo from "../assets/icon/index.js";
import AppDescription from "../components/AppDescription";
import BackgroundGradient from "../components/BackgroundGradient.jsx";

import DecorElements from "../components/DecorElements/DecorElements";
import { BgIcon } from "../assets/icon/index.js";

import AboutAppImage from "../assets/img/AboutApp.png";
export default function AboutApp() {
    return (
        <>
            <section
                id="about-app"
                data-aos="fade-up"
                data-aos-delay="100"
                className="w-full min-h-screen relative text-white mb-10"
            >
                <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center gap-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Преимущества приложения для разных пользователей
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left relative">
                        {AboutAppInfo.map((el, i) => (
                            <AppDescription
                                key={i}
                                path={el.path}
                                title={el.title}
                                description={el.description}
                            />
                        ))}

                        {[
                            {
                                icon: BgIcon.BgIcon3,
                                position: "-right-20 -bottom-40",
                            },
                            {
                                icon: BgIcon.BgIcon4,
                                position: "-left-20 -top-20",
                            },
                            {
                                icon: BgIcon.BgIcon5,
                                position: "left-0 -bottom-20",
                            },
                            {
                                icon: BgIcon.BgIcon6,
                                position: "right-0 -top-20",
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
                    <div className="w-full flex justify-end relative before:content-[''] z-400 before:absolute before:bottom-0 before:left-[calc(-50vw+50%)] before:w-screen before:h-[3px] before:bg-[#ECB241] before:translate-y-full">
                        <img
                            src={AboutAppImage}
                            alt="About App Image"
                            data-aos="fade-left"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                        />
                    </div>
                </div>

                <BackgroundGradient
                    gradientColor="rgba(84, 84, 212, 0.8), rgba(225, 225, 225, 0.1)"
                    size="w-100 h-100"
                    blur="blur-[200px]"
                    duration={20}
                    position="-left-40 top-0"
                />

                <BackgroundGradient
                    gradientColor="rgba(84, 84, 212, 0.8), rgba(225, 225, 225, 0.1)"
                    size="w-100 h-100"
                    blur="blur-[20px]"
                    duration={10}
                    delay={5}
                    position="-right-10 bottom-40"
                />
            </section>
        </>
    );
}
