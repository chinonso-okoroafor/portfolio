import { useHelpers } from "../../hooks/useHelpers"

const PersonalInformation = ({ personalInformationCollection }) => {

    const { capitalizeSentence } = useHelpers();

    return (
        <ul className="about-list list-unstyled open-sans-font">
            {
                personalInformationCollection.map((info, index) => (
                    <li key={index}>
                        <span className="title">{capitalizeSentence(Object.keys(info)[0])} : </span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{capitalizeSentence(Object.values(info)[0])}</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default PersonalInformation