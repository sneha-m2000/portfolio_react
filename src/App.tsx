
import './App.css';
import HeroHomepage from './components/Home';
import GlassmorphismHeader from './components/Header';
import AboutMe from './components/About';
import ProjectSlider from './components/ProjectSlider';
import ServicesSection from './components/Services';
import WorkExperience from './components/Experiences';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <GlassmorphismHeader />
            <HeroHomepage />
            <AboutMe />
            <ProjectSlider />
            <ServicesSection />
            <WorkExperience />
            <Contact />
        </div>
    );
}

export default App;
