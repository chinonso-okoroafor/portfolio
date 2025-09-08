import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import PortfolioPage from "../components/pages/PortfolioPage";
import ExperiencePage from "../components/pages/ExperiencePage";
import ContactPage from "../components/pages/ContactPage";
import CertificatesAndAwardsPage from "../components/pages/CertificatesAndAwardsPage";
import EntrepreneurDevelopmentPage from "../components/pages/EntrepreneurDevelopmentPage";


const siteRoutes = [
    {
        path: '',
        name: 'home-page',
        element: <HomePage />
    },{
        path: 'about-me',
        name: 'about-me-page',
        element: <AboutPage />
    },{
        path: 'portfolio',
        name: 'portfolio-page',
        element: <PortfolioPage />
    },{
        path: 'contact-me',
        name: 'contact-me-page',
        element: <ContactPage />
    },{
        path: 'awards-and-certifications',
        name: 'awards-and-certifications-page',
        element: <CertificatesAndAwardsPage />
    },{
        path: 'entrepreneurship',
        name: 'entrepreneurship-page',
        element: <EntrepreneurDevelopmentPage />
    }
]

export default siteRoutes;