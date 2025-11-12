import MainImage from "../assets/img/main_image.png";
import DecorElements from "../components/DecorElements/DecorElements.jsx";
import { BgIcon } from "../assets/icon";
import BackgroundGradient from "../components/BackgroundGradient.jsx";
import { ArrowUpRight } from "lucide-react";
import Modal from "../components/Modal.jsx";
import { useState } from "react";

export default function MainSection() {
    const [open, setOpen] = useState(false);
    return (
        <section
            id="home"
            data-aos="fade-up"
            className="w-full relative min-h-[90vh] mt-30 flex items-center justify-center"
        >
            <div className="max-w-[1200px] w-[90%] min-h-7 flex justify-center md:justify-between items-center mx-auto">
                <div className="flex flex-col min-w-0 items-center text-center md:items-start md:text-left relative">
                    <h1 className="font-normal text-[80px] lg:text-[100px] leading-[84%] text-white m-0 mb-[15%]">
                        SEN
                    </h1>
                    <p className="max-w-[500px] w-full text-lg lg:text-xl leading-[39px] font-normal tracking-[-0.66px] text-white opacity-70 mb-15">
                        Всестороннее развитие детей с помощью приложения
                        <br />
                        Мы хотим — создать лучшее будущее.
                        <br />
                        Мы верим в потенциал каждого ребёнка.
                    </p>
                    <button
                        onClick={() => {
                            setOpen(true);
                        }}
                        className="max-w-60 w-full max-h-15 h-[60px] flex gap-5 items-center justify-center bg-[#ECB241] rounded-sm text-xl text-white font-bold cursor-pointer"
                    >
                        Оставьте заявку
                        <ArrowUpRight />
                    </button>
                </div>
                <div className="max-w-[40%] w-full h-auto hidden md:block relative">
                    <img
                        src={MainImage}
                        alt="Main Image"
                        className="w-full h-full"
                    />
                    {[
                        { icon: BgIcon.BgIcon5, position: "right-0 top-0" },
                        {
                            icon: BgIcon.BgIcon6,
                            position: "left-0 top-0",
                        },
                        {
                            icon: BgIcon.BgIcon7,
                            position: "left-0 bottom-0",
                        },
                        {
                            icon: BgIcon.BgIcon8,
                            position: "right-0 bottom-0",
                        },
                    ].map(({ icon, position }, i) => (
                        <DecorElements
                            key={i}
                            path={icon}
                            position={position}
                            delay={Math.random() * 3}
                            duration={3 + Math.random() * 2}
                        />
                    ))}
                </div>
            </div>
            <BackgroundGradient
                position="-top-[20%] left-[10px] -rotate-45"
                gradientColor="rgba(236,178,65,1),rgba(251,168,28,0.27)"
                size="w-[200px] h-1/2"
                blur="blur-[100px]"
                opacity="opacity-50"
            />
            <Modal isOpen={open} onClose={() => setOpen(false)} />;
        </section>
    );
}
