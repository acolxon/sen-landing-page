import { useEffect, useState } from "react";
import PhoneInput from "./ui/PhoneInput";
import DecorElements from "./DecorElements/DecorElements";
import { BgIcon } from "../assets/icon";
import Loading from "./ui/Loading";

export default function Modal({ isOpen, onClose }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [phone, setPhone] = useState("");

    const digits = phone.replace(/\D/g, "").slice(1);
    const isPhoneValid = digits.length === 10;

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const formData = new FormData(e.target);

        try {
            const res = await fetch(
                "https://softstudio.kz/php/sen_email/sendInfo.php",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (res.ok) {
                setSuccess(true);
                e.target.reset();
            } else {
                alert("Ошибка при отправке. Попробуйте позже.");
            }
        } catch (err) {
            alert("Ошибка сети. Проверьте соединение.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-5000 flex items-center justify-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-[750px] w-[90%] max-h-[450px] md:max-h-[500px] h-[90%] rounded-[50px] bg-[linear-gradient(137deg,#ecb241_0%,#b16107_100%)] py-6 px-10 relative overflow-hidden flex flex-col justify-center"
            >
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <Loading />
                    </div>
                ) : success ? (
                    <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 text-white mb-4 animate-scale-up"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Спасибо за отзыв!
                        </h2>
                        <p className="text-lg text-white/80 max-w-sm">
                            Ваш отзыв успешно отправлен и скоро будет
                            рассмотрен.
                        </p>
                    </div>
                ) : (
                    <>
                        <h1 className="font-bold text-white text-center md:text-left text-3xl md:text-[40px]">
                            Оставьте отзыв
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center gap-8 text-[rgba(27,26,27,0.8)] text-normal md:text-xl font-bold"
                        >
                            <input
                                type="text"
                                name="full_name"
                                placeholder="Ф.И.О"
                                required
                                className="bg-white rounded-[20px] px-3 py-4 w-full focus:outline-none focus:ring-0 z-500"
                            />

                            <PhoneInput
                                name="phone"
                                value={phone}
                                onChange={setPhone}
                            />

                            <textarea
                                name="feedback"
                                placeholder="Напишите отзыв, чтобы оказать помощь"
                                required
                                className="bg-white rounded-[20px] font-bold px-3 py-4 w-full max-h-full focus:outline-none focus:ring-0 z-500 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className={`font-bold text-xl text-[#1b1a1b] max-w-50 w-full h-10 rounded-[20px] z-500 ${
                                    isPhoneValid
                                        ? "bg-white cursor-pointer"
                                        : "bg-gray-300 cursor-not-allowed"
                                }`}
                                disabled={!isPhoneValid}
                            >
                                Отправить
                            </button>
                        </form>
                    </>
                )}

                {[
                    { icon: BgIcon.BgIcon2, position: "right-5 top-10 w-40" },
                    { icon: BgIcon.BgIcon5, position: "left-5 top-10" },
                    {
                        icon: BgIcon.BgIcon7,
                        position: "left-10 bottom-10 rotate-45 w-40",
                    },
                    { icon: BgIcon.BgIcon1, position: "right-7 bottom-5 w-35" },
                    {
                        icon: BgIcon.BgIcon3,
                        position: "right-[50%] top-5 w-35 translate-x-1/2",
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
    );
}
