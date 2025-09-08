import accoladeImg1 from '../assets/img/accolade_1.png';
import accoladeImg2 from '../assets/img/accolade_2.png';

export const useRewardAndAccolade = () => {
    const accolade = [
        {
            image: accoladeImg2,
            issuedBy: 'University of Plymouth',
            issuedOn: new Date('06/06/2024'),
            url: 'https://openbadgefactory.com/v1/assertion/eb5a112493881f2bc8338785cabd778ebd596120'
        },{
            image: accoladeImg1,
            issuedBy: 'Common Mission Project',
            issuedOn: new Date('03/19/2024'),
            url: 'https://bcert.me/sbonarscc'
        }
    ];

    const getAccolade = () => {
        return accolade;
    }

    return {
        getAccolade
    }
}