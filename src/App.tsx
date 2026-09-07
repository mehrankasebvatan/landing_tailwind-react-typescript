import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Courses from "./components/Courses.tsx";
import Stats from "./components/Stats.tsx";

const App = () => {
    return (
        <div className="relative min-h-screen bg-dark-900 text-text-primary overflow-x-hidden">
            <Navbar/>
            <main>
                <Hero/>
                <Features/>
                <Courses/>
                <Stats/>
            </main>
        </div>
    )
}
export default App
