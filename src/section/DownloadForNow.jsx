import AppStoreIcon from "../assets/icon/App_Store.png";
import GooglePlayIcon from "../assets/icon/Google_Play.png";

export default function DownloadForNow() {
    return (
        <section className="w-full text-white py-24">
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
                {/* Левая часть — кнопки скачивания */}
                <div>
                    <p className="text-gray-400 text-lg mb-6">
                        Скачать прямо сейчас:
                    </p>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <a href="#" className="block">
                            <img
                                src={AppStoreIcon}
                                alt="App Store"
                                className="h-12 w-auto"
                            />
                        </a>
                        <a href="#" className="block">
                            <img
                                src={GooglePlayIcon}
                                alt="Google Play"
                                className="h-12 w-auto"
                            />
                        </a>
                    </div>
                </div>

                {/* Правая часть — текст */}
                <div className="text-[#ECB241] font-bold text-xl md:text-2xl leading-snug max-w-full text-center">
                    Помогаем детям с особыми потребностями учиться, <br />
                    играть и расти вместе
                </div>
            </div>
        </section>
    );
}
