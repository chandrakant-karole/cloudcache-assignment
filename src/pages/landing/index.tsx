import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import FeatCards from "./components/feature-cards/FeatCards";

export default function LandingIndex() {
    return (
        <div className="mx-auto px-6 my-8 max-w-[1440px] min-h-[calc(100vh-310px)]">
            <Banner />
            <FeatCards />
            <About />
        </div>
    )
}
