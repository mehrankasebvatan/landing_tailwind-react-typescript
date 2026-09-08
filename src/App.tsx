import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Courses from "./components/Courses.tsx";
import Stats from "./components/Stats.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Pricing from "./components/Pricing.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <div className="relative min-h-screen bg-dark-900 text-text-primary overflow-x-hidden">
            <Navbar/>
            <main>
                <Hero/>
                <Features/>
                <Courses/>
                <Stats/>
                <Testimonials/>
                <Pricing/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}
export default App
