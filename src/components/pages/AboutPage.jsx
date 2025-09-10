import { useEffect, useState } from "react";
import PersonalInformation from "../ui/PersonalInformation"

const AboutPage = ({ aboutMe, portfolio, accolade }) => {

    if (Object.keys(aboutMe).length <= 0) {
        return false;
    }

    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    let halfwayThrough = Math.round(aboutMe.personalInformation.length / 2)
    let arrayFirstHalf = aboutMe.personalInformation.slice(0, halfwayThrough)??[];
    let arraySecondHalf = aboutMe.personalInformation.slice(halfwayThrough, aboutMe.personalInformation.length)??[];

    const updateYearsOfExperience = () => {
        let sum = 0;

        aboutMe.workExperiences.forEach((experience) => {
            sum += processExperienceData(experience)
        });

        setYearsOfExperience(Math.floor(sum))
    }

    const processExperienceData = (experience) => {
        if (experience.start === experience.stop) return 0.5

        let stopYear = experience.stop === 'present' ? new Date().getFullYear() : experience.stop;

        return stopYear - experience.start;
    }

    useEffect(() => {
        updateYearsOfExperience()
    }, [aboutMe])

    return (
        <div className="" id="about">
            {
                true &&
                <div className="title-section text-left text-sm-center text-xs-center">
                    <h2>ABOUT <span>ME</span>
                    </h2>
                    <span className="title-bg">Resume</span>
                </div>
            }
            <div className="about">
                <div className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-5 col-xl-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                                    </div>
                                    <div className="col-6">
                                        <PersonalInformation
                                            personalInformationCollection={arrayFirstHalf}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <PersonalInformation
                                            personalInformationCollection={arraySecondHalf}
                                        />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <a className="button"
                                            href="https://www.linkedin.com/in/chinonso-okoroafor-57086a284" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="button-text">View LinkedIn</span>
                                            <span className="button-icon fa fa-link"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                                <div className="row">
                                    {
                                        yearsOfExperience && (
                                            <div className="col-6">
                                                <div className="box-stats with-margin">
                                                    <h3 className="poppins-font position-relative">{ yearsOfExperience }</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">
                                                        years of <span className="d-block">experience</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        portfolio && (
                                            <div className="col-6">
                                                <div className="box-stats with-margin">
                                                    <h3 className="poppins-font position-relative">{ portfolio }</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">
                                                        completed <span className="d-block">projects</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        accolade && (
                                            <div className="col-6">
                                                <div className="box-stats">
                                                    <h3 className="poppins-font position-relative">{ accolade }</h3>
                                                    <p className="open-sans-font m-0 position-relative text-uppercase">awards <span className="d-block">won</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">Professional Summary</h3>
                            </div>
                            <div className="col-12">
                                {
                                    aboutMe.professionalSummary.map((summary, index) => (
                                        <p className="open-sans-font" key={index}>
                                            {summary}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">Core Competences and Skills</h3>
                            </div>
                            {
                                aboutMe.competencesAndSkills.map((competenceOrSkill, index) => (
                                    <div key={index} className="core-competence col-12 col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="hexagon"></div>
                                                <span className={`${competenceOrSkill.icon}`}></span>
                                            </div>
                                            <h4>{ competenceOrSkill.title }</h4>
                                            <p>{ competenceOrSkill.body }</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">Technical Skills and Tools</h3>
                            </div>
                            {
                                aboutMe.technicalSkillsAndTools.map((skillOrTool, index) => (
                                    <div key={index} className="col-6 col-md-4 mb-3 mb-sm-5">
                                        <div className="c100 p100">
                                            <span className={`skill-icon ${skillOrTool.icon}`}></span>
                                            <div className="slice">
                                                <div className="bar"></div>
                                                <div className="fill"></div>
                                            </div>
                                        </div>
                                        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">{skillOrTool.name}</h6>
                                    </div>
                                ))
                            }
                        </div>
                        <hr className="separator mt-1" />
                        <div className="row">
                            <div className="col-12">
                            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience</h3>
                            </div>
                            <div className="col-12 m-15px-tb">
                                <div className="resume-box">
                                    <ul>
                                        {
                                            aboutMe.workExperiences.map((experience, index) => (
                                                <li key={index}>
                                                    <div className="icon">
                                                    <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <span className="time open-sans-font text-uppercase">{`${experience.startMonth} ${experience.start}`.trim()} - {`${experience.stopMonth} ${experience.stop}`.trim()}</span>
                                                    <h5 className="poppins-font text-uppercase">
                                                        {experience.jobDescription} <span className="place open-sans-font">{experience.company}</span>
                                                    </h5>
                                                    {
                                                        experience.operationalSummary && (
                                                            <p className="open-sans-font">
                                                                {experience.operationalSummary}
                                                            </p>
                                                        )
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="separator mt-1" />
                        <div className="row">
                            <div className="col-12">
                            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Education </h3>
                            </div>
                            <div className="col-12 m-15px-tb">
                                <div className="resume-box">
                                    <ul>
                                        {
                                            aboutMe.education.map((educate, index) => (
                                                <li key={index}>
                                                    <div className="icon">
                                                    <i className="fa fa-graduation-cap"></i>
                                                    </div>
                                                    <span className="time open-sans-font text-uppercase">{educate.start} - {educate.stop}</span>
                                                    <h5 className="poppins-font text-uppercase">{educate.course} <span className="place open-sans-font">{educate.institution}</span>
                                                    </h5>
                                                    {
                                                        educate.summary && (
                                                            <p className="open-sans-font">
                                                                {educate.summary}
                                                            </p>
                                                        )
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage