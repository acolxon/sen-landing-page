import { useEffect } from "react";
import Background from "./components/Background";
import MainSection from "./section/MainSection";
import Header from "./components/Header";
import AboutUs from "./section/AboutUs";
import AboutApp from "./section/AboutApp";
import DownloadForNow from "./section/DownloadForNow";
import FaqSection from "./section/FaqSection";
import Footer from "./section/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
    useEffect(() => {
        Aos.init({ duration: 700, once: true });
    }, []);

    return (
        <>
            <Header />
            <MainSection />
            <AboutUs />
            <AboutApp />
            <DownloadForNow />
            <FaqSection />
            <Footer />
            <Background />
        </>
    );
}
