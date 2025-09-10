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

import PageHeader from "../components/common/PageHeader"
import PageLoader from "../components/common/PageLoader"
import { useAppContext } from "../context/GlobalAppContextProvider"
import { useEffect, useState, useRef } from "react"
import HomePage from "../components/pages/HomePage"
import AboutPage from "../components/pages/AboutPage"
import PortfolioPage from "../components/pages/PortfolioPage"
import { getApiResource } from "../config/getApiResource"
import ContactPage from "../components/pages/ContactPage"
import CertificatesAndAwardsPage from "../components/pages/CertificatesAndAwardsPage"
import EntrepreneurDevelopmentPage from "../components/pages/EntrepreneurDevelopmentPage"

const ApplicationLayout = () => {
  const { loading, setLoading } = useAppContext();
  const [apiData, setApiData] = useState({});
  const sectionsRef = useRef({});
  const [mobileActiveHeader, setMobileActiveHeader] = useState('');

  // ✅ Fetch data once on mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getApiResource();
      setApiData(data);
      setLoading(false);
    };
    fetchData();
  }, [setLoading]);

  // ✅ Observe sections only after data is available
  useEffect(() => {
    if (!apiData || Object.keys(apiData).length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMobileActiveHeader(entry.target.dataset.name);
            // console.log(entry.target.dataset.name);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = Object.values(sectionsRef.current);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [apiData, Object.keys(sectionsRef.current).length]); 

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <PageHeader />
      <div className="light home-page">
        <div className="pages">
          <HomePage sectionsRef={sectionsRef} mobileActiveHeader={mobileActiveHeader} />
          <AboutPage
            sectionsRef={sectionsRef}
            aboutMe={apiData.aboutMe || {}}
            portfolio={apiData.portfolio?.length || 0}
            accolade={apiData.accolades?.length || 0}
            mobileActiveHeader={mobileActiveHeader} 
          />
          <PortfolioPage portfolioData={apiData.portfolio || []} sectionsRef={sectionsRef} mobileActiveHeader={mobileActiveHeader} />
          <ContactPage sectionsRef={sectionsRef} mobileActiveHeader={mobileActiveHeader} />
          <CertificatesAndAwardsPage accolades={apiData.accolades || []} sectionsRef={sectionsRef} mobileActiveHeader={mobileActiveHeader} />
          <EntrepreneurDevelopmentPage businesses={apiData.businesses || []} sectionsRef={sectionsRef} mobileActiveHeader={mobileActiveHeader} />
        </div>
      </div>
    </>
  );
};

export default ApplicationLayout;
