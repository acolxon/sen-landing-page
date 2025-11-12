"use client";
import { useState, useRef, useEffect } from "react";
import FaqItem from "../components/FaqItem";
import PhoneIcon from "../assets/icon/Phone_Call.svg";

import DecorElements from "../components/DecorElements/DecorElements";
import { BgIcon } from "../assets/icon/index.js";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Как открыть аккаунт, если до этого была регистрация?",
            answer: "Если вы уже регистрировались ранее, просто войдите в систему, используя ваш логин и пароль. Если забыли пароль — воспользуйтесь функцией восстановления.",
        },
        {
            question: "Что делать, если забыл пароль?",
            answer: "Воспользуйтесь функцией восстановления пароля — укажите ваш email или телефон, и следуйте инструкции из письма.",
        },
        {
            question: "Можно ли изменить данные профиля?",
            answer: "Да, в настройках аккаунта можно изменить личные данные, пароль и другие параметры.",
        },
    ];

    return (
        <section className="w-full min-h-[50vh] text-white mb-20 bg-[#1e1e2085] py-20">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col lg:flex-row justify-between gap-10 relative">
                {/* Левая часть */}
                <div className="flex flex-col items-start gap-8 flex-1">
                    <h2 className="text-3xl sm:text-4xl font-semibold">FAQ</h2>

                    <div className="flex flex-col gap-5 w-full max-w-[800px]">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* Правая часть — кнопки */}
                <div className="flex flex-col sm:flex-row lg:flex-col self-start lg:self-end justify-center gap-4 w-full sm:w-auto">
                    <button className="text-base font-normal text-white h-[45px] w-full sm:w-40 flex items-center justify-center border border-[#ECB241] rounded-[5px] gap-2 hover:bg-[#ECB241]/10 transition">
                        Контакты
                        <img
                            src={PhoneIcon}
                            alt="Phone Icon"
                            className="w-5 h-5"
                        />
                    </button>
                    <button className="text-base font-normal text-white h-[45px] w-full sm:w-40 flex items-center justify-center bg-[#ECB241] rounded-[5px] gap-2 hover:brightness-110 transition">
                        Связаться
                        <img
                            src={PhoneIcon}
                            alt="Phone Icon"
                            className="w-5 h-5"
                        />
                    </button>
                </div>

                {[
                    { icon: BgIcon.BgIcon4, position: "-left-20 top-0" },
                    { icon: BgIcon.BgIcon7, position: "-right-20 -bottom-40" },
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
        </section>
    );
}
