// Import all Application Styling Here!!!
// import "../../assets/css/style.css";
import "../assets/css/bootstrap.min.css"
import "../assets/css/component.css"
import "../assets/css/circle.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/style.css"
import "../assets/css/skins/green.css"
import "../assets/css/skins/blue.css"
import "../assets/css/skins/green.css"
import "../assets/css/skins/yellow.css"
import "../assets/css/skins/blueviolet.css"
import "../assets/css/skins/goldenrod.css"
import "../assets/css/skins/magenta.css"
import "../assets/css/skins/orange.css"
import "../assets/css/skins/purple.css"
import "../assets/css/skins/red.css"
import "../assets/css/skins/yellowgreen.css"
import "../assets/css/styleswitcher.css"

// Javascript Code Starts Here!!!
import PageHeader from "../components/common/PageHeader"
import PageLoader from "../components/common/PageLoader"
import { useAppContext } from "../context/GlobalAppContextProvider"
import { useEffect, useState } from "react"
import HomePage from "../components/pages/HomePage"
import AboutPage from "../components/pages/AboutPage"
import PortfolioPage from "../components/pages/PortfolioPage"
import { useApiResource } from "../config/useApiResource"
import ContactPage from "../components/pages/ContactPage"
import CertificatesAndAwardsPage from "../components/pages/CertificatesAndAwardsPage"
import EntrepreneurDevelopmentPage from "../components/pages/EntrepreneurDevelopmentPage"

const ApplicationLayout = () => {

    const { loading, setLoading } = useAppContext();
    const [apiData, setApiData] = useState({ });

    const fetchApiData = async () => {
        setLoading(true);
        const data = useApiResource();
        setApiData(data);
    };

    useEffect(() => {
        fetchApiData();
    }, []);

    if (Object.keys(apiData).length <= 0) {
        return false;
    }

    return (
        <>
            { loading && <PageLoader /> }
            <PageHeader />
            <div className="light home-page">
                <div className="pages">
                    <HomePage />
                    <AboutPage aboutMe={apiData.aboutMe} portfolio={apiData.portfolio.length} accolade={apiData.accolades.length} />
                    <PortfolioPage 
                        portfolio={apiData.portfolio}
                    />
                    <ContactPage />
                    {
                        apiData.accolades && apiData.accolades.length > 0 &&
                        <CertificatesAndAwardsPage 
                            accolades={apiData.accolades}
                        />
                    }
                    {
                        apiData.businesses && apiData.businesses.length > 0 &&
                        <EntrepreneurDevelopmentPage businesses={apiData.businesses} />
                    }
                </div>
            </div>
        </>
    )
}

export default ApplicationLayout