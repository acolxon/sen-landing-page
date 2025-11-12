import React, { useState, useEffect } from "react";
import Logo from "../assets/icon/Logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [show, setShow] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScrollHeader = () => {
        if (window.scrollY > lastScrollY) setShow(false);
        else setShow(true);
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollHeader);
        return () => window.removeEventListener("scroll", handleScrollHeader);
    }, [lastScrollY]);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -50;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false); // закрыть меню после клика
        }
    };

    return (
        <header
            className={`w-full text-white fixed top-0 py-5 px-5 md:p-10 left-0 rounded-b-2xl z-1000 transition-transform duration-300 backdrop-blur-[12.28px] bg-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_4px_0_rgba(255,255,255,0.15),inset_2px_3px_9px_0_rgba(255,255,255,0.15),-1px_-2px_12px_-8px_rgba(0,0,0,0.15),-9px_-14px_48px_-12px_rgba(0,0,0,0.15)] ${
                show ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-[1200px] w-[90%] mx-auto flex items-center justify-between">
                <div className="max-w-[100px] w-full h-auto">
                    <img src={Logo} alt="SEN Logo" className="h-auto w-full" />
                </div>

                {/* Десктоп навигация */}
                <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:block ">
                    <ul className="flex gap-6 text-gray-400 text-xl">
                        <li
                            className="hover:text-yellow-500 cursor-pointer"
                            onClick={() => handleScroll("home")}
                        >
                            Главная
                        </li>
                        <li
                            className="hover:text-yellow-500 cursor-pointer"
                            onClick={() => handleScroll("about-us")}
                        >
                            О Нас
                        </li>
                        <li
                            className="hover:text-yellow-500 cursor-pointer"
                            onClick={() => handleScroll("about-app")}
                        >
                            О приложении
                        </li>
                    </ul>
                </nav>

                {/* Бургер кнопка */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white"
                    >
                        {menuOpen ? (
                            <X size={30} color="#99a1af" />
                        ) : (
                            <Menu size={30} color="#99a1af" />
                        )}
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            <div
                // --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
                // 1. Убрали 'transform' и 'origin-top', так как они относились к 'scale-y'
                // 2. Добавили 'overflow-hidden', чтобы скрыть содержимое, когда max-h-0
                // 3. Добавили 'ease-in-out' для более плавной анимации
                className={`md:hidden flex flex-col items-center bg-[rgba(0,0,0,0.23)] rounded-xl gap-4 transition-all duration-300 ease-in-out overflow-hidden ${
                    menuOpen
                        ? // 4. Заменили 'scale-y-100' на 'max-h-96' (любое значение, > высоты контента)
                          "max-h-96 mt-4 opacity-100 py-4"
                        : // 5. Заменили 'scale-y-0' на 'max-h-0'
                          "max-h-0 opacity-0 pointer-events-none"
                }`}
                // --- КОНЕЦ ИЗМЕНЕНИЙ ---
            >
                <button
                    className="text-gray-400 hover:text-yellow-500 text-xl"
                    onClick={() => handleScroll("home")}
                >
                    Главная
                </button>
                <button
                    className="text-gray-400 hover:text-yellow-500 text-xl"
                    onClick={() => handleScroll("about-us")}
                >
                    О Нас
                </button>
                <button
                    className="text-gray-400 hover:text-yellow-500 text-xl"
                    onClick={() => handleScroll("about-app")}
                >
                    О приложении
                </button>
            </div>
        </header>
    );
}
