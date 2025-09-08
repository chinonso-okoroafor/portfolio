export const useSiteNavigator = () => {

    const HOME_PAGE = 'home';
    const ABOUT_ME_PAGE = 'about-me';
    const PORTFOLIO_PAGE = 'portfolio';
    const CONTACT_ME_PAGE = 'contact-me';
    const CERTIFICATES_AND_AWARDS_PAGE = 'certificates-and-awards';
    const ENTREPRENEURSHIP_PAGE = 'entrepreneurship';
    const EXPERIENCES_PAGE = 'experiences';
    const ACTIVE = 'active'
    

    const toggleMobileMenu = () => {
        const mobileMenu = document.querySelector("#trigger-mobile");
        const mobileMenuNavList = document.querySelector("#mobile-nav");

        const isOpened = mobileMenu.classList.contains("show-menu");
        mobileMenu.classList.toggle("show-menu", !isOpened)
        mobileMenuNavList.classList.toggle("hide-list", !isOpened)
    }

    const mobileLinkNavigate = (routeData) => {
        toggleMobileMenu();
    }

    const webLinkNavigate = (routeData) => {

    }

    return {
        HOME_PAGE,
        ABOUT_ME_PAGE,
        PORTFOLIO_PAGE,
        CONTACT_ME_PAGE,
        CERTIFICATES_AND_AWARDS_PAGE,
        ENTREPRENEURSHIP_PAGE,
        EXPERIENCES_PAGE,
        ACTIVE,

        toggleMobileMenu,
        mobileLinkNavigate,
        webLinkNavigate
    }
}