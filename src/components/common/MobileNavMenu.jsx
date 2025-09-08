import { useAppContext } from "../../context/GlobalAppContextProvider";
import { useSiteNavigator } from "../../hooks/useSiteNavigator"

const MobileNavMenu = () => {

    const { HOME_PAGE, ABOUT_ME_PAGE, PORTFOLIO_PAGE, 
        CONTACT_ME_PAGE, CERTIFICATES_AND_AWARDS_PAGE, 
        ENTREPRENEURSHIP_PAGE, EXPERIENCES_PAGE, ACTIVE, toggleMobileMenu } = useSiteNavigator();
    const { activePageLink, setActivePageLink } = useAppContext();

    const updateActivePageLink = (targetPage) => {
        setActivePageLink(targetPage);
        toggleMobileMenu();
    }

    return (
        <nav className="d-block d-lg-none">
            <div className="inputmobile" id="inputmobile">
                <div id="trigger-mobile" className="trigger-mobile" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="list-unstyled" id="mobile-nav">
                    <li 
                        onClick={() => updateActivePageLink(HOME_PAGE)}
                        className={`mobile-nav-element home-link ${activePageLink === HOME_PAGE ? ACTIVE : '' }`}
                    >
                        <div>
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                        </div>
                    </li>
                    <li 
                        onClick={() => updateActivePageLink(ABOUT_ME_PAGE)}
                        className={`mobile-nav-element ${activePageLink === ABOUT_ME_PAGE ? ACTIVE : '' }`}
                    >
                        <div>
                            <i className="fa fa-user"></i>
                            <span>About</span>
                        </div>
                    </li>
                    <li 
                        onClick={() => updateActivePageLink(PORTFOLIO_PAGE)}
                        className={`mobile-nav-element ${activePageLink === PORTFOLIO_PAGE ? ACTIVE : '' }`}
                    >
                        <div>
                            <i className="fa fa-folder-open"></i>
                            <span>Portfolio</span>
                        </div>
                    </li>
                    <li 
                        onClick={() => updateActivePageLink(CONTACT_ME_PAGE)}
                        className={`mobile-nav-element ${activePageLink === CONTACT_ME_PAGE ? ACTIVE : '' }`}
                    >
                        <div>
                            <i className="fa fa-envelope-open"></i>
                            <span>Contact</span>
                        </div>
                    </li>
                    <li 
                        onClick={() => updateActivePageLink(CERTIFICATES_AND_AWARDS_PAGE)}
                        className={`mobile-nav-element ${activePageLink === CERTIFICATES_AND_AWARDS_PAGE ? ACTIVE : '' }`}
                    >
                        <div>
                            <i className="fa fa-certificate"></i>
                            <span>Awards</span>
                        </div>
                    </li>
                    <li 
                        onClick={() => updateActivePageLink(ENTREPRENEURSHIP_PAGE)}
                        className={`mobile-nav-element ${activePageLink === ENTREPRENEURSHIP_PAGE ? ACTIVE : '' }`}
                    >
                        <div>
                            <i className="fa fa-address-card"></i>
                            <span>Entrepreneurship</span>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MobileNavMenu