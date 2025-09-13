import { useEffect, useState } from "react";
import PersonalInformation from "../ui/PersonalInformation";
import { useAppContext } from "../../context/GlobalAppContextProvider";
import { useHelpers } from "../../hooks/useHelpers";

const AboutPage = ({ aboutMe = {}, portfolio = 0, accolade = 0, sectionsRef, mobileActiveHeader }) => {
  const ABOUT = "about";
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const { windowDimensions } = useAppContext();
  const { canShowMobileHeader } = useHelpers();

  // Defensive defaults
  const personalInformation = aboutMe.personalInformation ?? [];
  const workExperiences = aboutMe.workExperiences ?? [];
  const professionalSummary = aboutMe.professionalSummary ?? [];
  const competencesAndSkills = aboutMe.competencesAndSkills ?? [];
  const technicalSkillsAndTools = aboutMe.technicalSkillsAndTools ?? [];
  const education = aboutMe.education ?? [];

  // Split personal info for two columns
  const halfwayThrough = Math.ceil(personalInformation.length / 2);
  const arrayFirstHalf = personalInformation.slice(0, halfwayThrough);
  const arraySecondHalf = personalInformation.slice(halfwayThrough);

  const processExperienceData = (experience) => {
    if (!experience.start || !experience.stop) return 0;
    if (experience.start === experience.stop) return 0.5;

    const stopYear =
      experience.stop === "present"
        ? new Date().getFullYear()
        : Number(experience.stop);

    return stopYear - Number(experience.start);
  };

  const updateYearsOfExperience = () => {
    const sum = workExperiences.reduce(
      (acc, exp) => acc + processExperienceData(exp),
      0
    );
    setYearsOfExperience(Math.floor(sum));
  };

  useEffect(() => {
    if (workExperiences.length > 0) {
      updateYearsOfExperience();
    }
  }, [workExperiences]);

  return (
    <section
      ref={(el) => (sectionsRef.current[ABOUT] = el)}
      data-name="about"
      id="about"
      style={{ marginBottom: windowDimensions.winWidth <= 577  ? '60px' : '0' }}
    >
      {
        canShowMobileHeader(windowDimensions.winWidth, mobileActiveHeader, ABOUT) &&
          <div className="title-section text-left text-sm-center text-xs-center">
            <h2>
              ABOUT <span>ME</span>
            </h2>
            <span className="title-bg">Resume</span>
          </div>
      }

      <div className="about">
        <div className="main-content">
          <div className="container">
            <div className="row">
              {/* Stats */}
              <div className="col-12 col-md-10 offset-md-2">
                <div className="row">
                  {yearsOfExperience > 0 && (
                    <div className="col-12 col-sm-6">
                      <div className="box-stats with-margin">
                        <h3 className="poppins-font position-relative">
                          {yearsOfExperience}
                        </h3>
                        <p className="open-sans-font m-0 position-relative text-uppercase">
                          years of <span className="d-block">experience</span>
                        </p>
                      </div>
                    </div>
                  )}
                  {portfolio > 0 && (
                    <div className="col-12 col-sm-6">
                      <div className="box-stats with-margin">
                        <h3 className="poppins-font position-relative">{portfolio}</h3>
                        <p className="open-sans-font m-0 position-relative text-uppercase">
                          completed <span className="d-block">projects</span>
                        </p>
                      </div>
                    </div>
                  )}
                  {accolade > 0 && (
                    <div className="col-12 col-sm-6">
                      <div className="box-stats with-margin">
                        <h3 className="poppins-font position-relative">{accolade}</h3>
                        <p className="open-sans-font m-0 position-relative text-uppercase">
                          awards <span className="d-block">won</span>
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="col-12  col-sm-6 d-flex justify-content-center align-items-center">
                    <div className="with-margin">
                      <a
                        className="button"
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
              </div>
            </div>

            <hr className="separator" />

            {/* Professional Summary */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                  Professional Summary
                </h3>
              </div>
              <div className="col-12">
                {professionalSummary.map((summary, i) => (
                  <p className="open-sans-font" key={i}>
                    {summary}
                  </p>
                ))}
              </div>
            </div>

            <hr className="separator" />

            {/* Core Competences */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                  Core Competences and Skills
                </h3>
              </div>
              {competencesAndSkills.map((item, i) => (
                <div
                  key={i}
                  className="core-competence col-12 col-lg-6 col-md-6 col-sm-12"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="hexagon"></div>
                      <span className={item.icon}></span>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="separator" />

            {/* Technical Skills */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                  Technical Skills and Tools
                </h3>
              </div>
              {technicalSkillsAndTools.map((skill, i) => (
                <div key={i} className="col-6 col-md-4 mb-3 mb-sm-5">
                  <div className="c100 p100">
                    <span className={`skill-icon ${skill.icon}`}></span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                    {skill.name}
                  </h6>
                </div>
              ))}
            </div>

            <hr className="separator mt-1" />

            {/* Work Experience */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                  Experience
                </h3>
              </div>
              <div className="col-12 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    {workExperiences.map((exp, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="fa fa-briefcase"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">
                          { exp.start === exp.stop ? `${exp.startMonth}` : `${exp.startMonth || ""} ${exp.start || ""}`.trim() } - {" "}
                          { `${exp.stopMonth || ""} ${exp.stop || ""}`.trim() }
                        </span>
                        <h5 className="poppins-font text-uppercase">
                          {exp.jobDescription}{" "}
                          <span className="place open-sans-font">{exp.company}</span>
                        </h5>
                        {exp.operationalSummary && (
                          <p className="open-sans-font">{exp.operationalSummary}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr className="separator mt-1" />

            {/* Education */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                  Education
                </h3>
              </div>
              <div className="col-12 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    {education.map((edu, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="fa fa-graduation-cap"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">
                          {edu.start} - {edu.stop}
                        </span>
                        <h5 className="poppins-font text-uppercase">
                          {edu.course}{" "}
                          <span className="place open-sans-font">{edu.institution}</span>
                        </h5>
                        {edu.summary && (
                          <p className="open-sans-font">{edu.summary}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
