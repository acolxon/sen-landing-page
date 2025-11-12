import Logo from "../assets/icon/Logo.png";
import { IconsMedia } from "../assets/icon/index.js";
import BackgroundGradient from "../components/BackgroundGradient.jsx";

export default function Footer() {
    return (
        <section className="w-full text-white py-8 relative">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center gap-6">
                {/* Верхняя часть */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Логотип */}
                    <img src={Logo} alt="SEN Logo" className="w-25 h-auto" />

                    {/* Навигация */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-300">
                        <a href="#" className="hover:text-[#ECB241] transition">
                            Support
                        </a>
                        <a href="#" className="hover:text-[#ECB241] transition">
                            Политика конфиденциальности
                        </a>
                        <a href="#" className="hover:text-[#ECB241] transition">
                            Условия и положения
                        </a>
                    </div>

                    {/* Соцсети */}
                    <div className="flex gap-5">
                        <a href="#">
                            <img
                                src={IconsMedia.InstIcon}
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={IconsMedia.MailIcon}
                                alt="Mail"
                                className="w-6 h-6"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={IconsMedia.WhatsIcon}
                                alt="WhatsApp"
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                </div>

                {/* Нижняя часть */}
                <p className="text-xs text-gray-400 text-center">© 2025 SEN</p>
            </div>
        </section>
    );
}
