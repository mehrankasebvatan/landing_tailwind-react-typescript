import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Courses from "./components/Courses.tsx";

const App = () => {
    return (
        <div className="relative min-h-screen bg-dark-900 text-text-primary overflow-x-hidden">
            <Navbar/>
            <main>
                <Hero/>
                <Features/>
                <Courses/>
            </main>
        </div>
    )
}
export default App
