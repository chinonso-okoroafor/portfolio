import { useAppContext } from "../../context/GlobalAppContextProvider";
import { useSiteNavigator } from "../../hooks/useSiteNavigator";

const WebNavMenu = () => {

    const { HOME_PAGE, ABOUT_ME_PAGE, PORTFOLIO_PAGE, 
        CONTACT_ME_PAGE, CERTIFICATES_AND_AWARDS_PAGE, 
        ENTREPRENEURSHIP_PAGE, EXPERIENCES_PAGE, ACTIVE } = useSiteNavigator();
    const { activePageLink, setActivePageLink } = useAppContext();

    const updateActivePageLink = (targetPage) => {
        setActivePageLink(targetPage)
    }

    return (
        <ul id="desktop-nav" className="icon-menu d-none d-lg-block">
            <li 
                onClick={() => updateActivePageLink(HOME_PAGE)} 
                className={`icon-box desktop-nav-element ${activePageLink === HOME_PAGE ? ACTIVE : '' }`}
            >
                <i className="fa fa-home"></i>
                <div>
                    <h2>Home</h2>
                </div>
            </li>
            <li 
                onClick={() => updateActivePageLink(ABOUT_ME_PAGE)} 
                className={`icon-box desktop-nav-element ${activePageLink === ABOUT_ME_PAGE ? ACTIVE : '' }`}
            >
                <i className="fa fa-user"></i>
                <div>
                    <h2>About</h2>
                </div>
            </li>
            <li 
                onClick={() => updateActivePageLink(PORTFOLIO_PAGE)} 
                className={`icon-box desktop-nav-element ${activePageLink === PORTFOLIO_PAGE ? ACTIVE : '' }`}
            >
                <i className="fa fa-briefcase"></i>
                <div>
                    <h2>Portfolio</h2>
                </div>
            </li>
            <li 
                onClick={() => updateActivePageLink(CONTACT_ME_PAGE)} 
                className={`icon-box desktop-nav-element ${activePageLink === CONTACT_ME_PAGE ? ACTIVE : '' }`}
            >
                <i className="fa fa-envelope-open"></i>
                <div>
                    <h2>Contact</h2>
                </div>
            </li>
            <li 
                onClick={() => updateActivePageLink(CERTIFICATES_AND_AWARDS_PAGE)} 
                className={`icon-box desktop-nav-element ${activePageLink === CERTIFICATES_AND_AWARDS_PAGE ? ACTIVE : '' }`}
            >
                <i className="fa fa-certificate"></i>
                <div>
                    <h2>Awards</h2>
                </div>
            </li>
            <li 
                onClick={() => updateActivePageLink(ENTREPRENEURSHIP_PAGE)} 
                className={`icon-box desktop-nav-element ${activePageLink === ENTREPRENEURSHIP_PAGE ? ACTIVE : '' }`}
            >
                <i className="fa fa-address-card"></i>
                <div>
                    <h2>Entrepreneurship</h2>
                </div>
            </li>
        </ul>
    )
}

export default WebNavMenu