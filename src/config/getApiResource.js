import { useAboutMe } from "./useAboutMe";
import { useEntrepreneurDevelopment } from "./useEntrepreneurDevelopment";
import { usePortfolioData } from "./usePortfolioData";
import { useRewardAndAccolade } from "./useRewardAndAccolade";

export const getApiResource = async () => {

    const { getAboutMe } = useAboutMe();
    const { getPortfolio } = usePortfolioData();
    const { getAccolade } = useRewardAndAccolade();
    const { getBusinesses } = useEntrepreneurDevelopment();

    return {
        aboutMe: getAboutMe(),
        portfolio: getPortfolio(),
        accolades: getAccolade(),
        businesses: getBusinesses()
    }
}