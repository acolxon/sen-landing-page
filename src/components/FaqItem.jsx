import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ question, answer, isOpen, onClick }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (!contentRef.current) return;
        let ro;

        const measure = () => {
            // добавим +1 на случай дробных пикселей
            setHeight(contentRef.current.scrollHeight + 1);
        };

        if (isOpen) {
            // дождёмся следующего кадра, чтобы DOM точно пересчитал размеры
            requestAnimationFrame(measure);
            // отслеживаем изменение размера содержимого (например, динамический текст)
            ro = new ResizeObserver(measure);
            ro.observe(contentRef.current);
        } else {
            // закрываем — сразу 0, transition выполнит анимацию
            setHeight(0);
        }

        return () => ro && ro.disconnect();
    }, [isOpen, answer]);

    return (
        <div className="w-full bg-[#ECB241] rounded-2xl cursor-pointer text-black pb-2 shadow-md">
            <button
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                className="w-full flex justify-between cursor-pointer px-6 py-5 items-center text-left"
            >
                <p className="font-medium text-base md:text-lg">{question}</p>
                <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 min-w-5 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className="overflow-hidden transition-[max-height] max-w-[95%] mx-auto duration-300 ease-in-out"
                style={{ maxHeight: `${height}px` }}
            >
                {/* важно: используем padding вместо margin (mt-4 -> pt-4), чтобы margin не "выпадал" */}
                <div
                    ref={contentRef}
                    className="pt-4 pb-4 text-sm md:text-base text-gray-800 bg-white rounded-xl p-4 leading-relaxed"
                >
                    {answer}
                </div>
            </div>
        </div>
    );
}
