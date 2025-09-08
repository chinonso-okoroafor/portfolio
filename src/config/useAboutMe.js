export const useAboutMe = () => {
    const aboutMe = {
        personalInformation: [
            {"first name": "chinonso"},
            {"middle name": "franklin"},
            {"last name": "okoroafor"},
            {"nationality": "nigerian"},
            {"country of residence": "united kingdom"},
            {"email": "chinonso.okoroafor@outlook.com"},
            {"languages": "english, igbo, turkish"}
        ],
        professionalSummary: [
            "A highly analytical Data Science and Business Analytics professional with expertise in developing end-to-end, data-driven applications that transform complex business requirements into effective, user-focused solutions. Strong foundations in predictive modeling, statistical inference, and machine learning are complemented by experience across the full data lifecycle, from ingestion and preprocessing to model deployment and performance evaluation.",
            "Specialization includes financial analysis, Natural Language Processing (NLP), and social media analytics, with a track record of deriving actionable insights from unstructured and large-scale datasets. Demonstrated ability to bridge technical rigor with commercial strategy, delivering solutions that support data-driven decision-making and generate measurable business impact.",
            "Alongside technical expertise, I bring entrepreneurial vision and leadership development, exemplified through founding the African Food Marketplace—a digital innovation initiative addressing cultural, commercial, and logistical challenges within the African food value chain. By leading research, market analysis, and business model design, I have applied data-driven methods to shape product development, vendor partnerships, and go-to-market strategies. This blend of technical acumen, business insight, and entrepreneurial initiative underscores my drive to create solutions that not only deliver commercial value but also foster cultural connection and social impact."
        ],
        competencesAndSkills: [
            {
                icon: 'fa fa-refresh',
                title: 'Full Lifecycle Data Science',
                body: 'From problem framing and data prep to modeling, deployment, and evaluation.'
            },{
                icon: 'fa fa-line-chart',
                title: 'Statistical Modeling & Machine Learning',
                body: 'Predictive modeling using frequentist, Bayesian, and advanced ML methods.'
            },{
                icon: 'fa fa-money',
                title: 'Business Acumen & Financial Analysis',
                body: 'Interpreting financial data to drive strategy and investment insights.'
            },{
                icon: 'fa fa-database',
                title: 'Database & Software Development',
                body: 'Relational database design and interactive tool development.'
            },{
                icon: 'fa fa-bar-chart',
                title: 'Data Visualization & Communication',
                body: 'Clear, impactful communication of analytical insights.'
            },{
                icon: 'fa fa-lightbulb-o',
                title: 'Research & Problem-Solving',
                body: 'Applying rigorous methods to tackle complex, real-world challenges.'
            },{
                icon: 'fa fa-language',
                title: 'Natural Language Processing & Social Media Analytics',
                body: 'Sentiment analysis, topic modeling, and insights from large text datasets.'
            }
        ],
        technicalSkillsAndTools: [
            {
                icon: 'fa-brands fa-python',
                name: 'Python'
            },{
                icon: 'fa-brands fa-r-project',
                name: 'R'
            },{
                icon: 'fas fa-database',
                name: 'SQL'
            },{
                icon: 'ms-Icon ms-Icon--PowerBILogo',
                name: 'Power BI'
            },{
                icon: 'fa-solid fa-magnifying-glass-chart',
                name: 'Statistical Analysis'
            }
        ],
        workExperiences: [
            {
                company: 'Mars Wrigley',
                jobDescription: 'Production Operative',
                operationalSummary: 'Collected, recorded, and shared production data to track output and KPIs, helping teams monitor performance and keep daily operations running smoothly. Operated production robots, captured machine data for maintenance, and supported new team members through training.',
                start: 2024,
                stop: 'present',
                startMonth: '',
                stopMonth: ''
            },{
                company: 'Mahkola Clothing Collection',
                jobDescription: 'Business Operations Manager',
                operationalSummary: 'Used Microsoft Excel and Power BI to track sales, manage inventory, and analyze business data, providing insights that improved customer retention and helped increase sales by 60% each year.',
                start: 2019,
                stop: 2022,
                startMonth: '',
                stopMonth: ''
            },{
                company: 'Ericnelly Communications',
                jobDescription: 'Computer & Mobile Phone Technician',
                operationalSummary: 'Repaired and maintained a wide range of computers and mobile devices, diagnosing and resolving both hardware and software issues. Implemented effective software solutions that reduced recurring customer problems, while providing exceptional service that increased customer satisfaction and referrals.',
                start: 2014,
                stop: 2019,
                startMonth: '',
                stopMonth: ''
            },{
                company: 'Ericnelly Communications',
                jobDescription: 'Apprentice Computer & Mobile Phone Technician',
                operationalSummary: 'Assisted senior technicians in diagnosing and repairing computers and mobile devices, gaining hands-on experience in hardware troubleshooting, software maintenance, and customer support.',
                start: 2014,
                stop: 2014,
                startMonth: 'Jan.',
                stopMonth: 'Aug.'
            }
        ],
        education: [
            {
                institution: 'University of Plymouth',
                course: 'MSc Data Science & Business Analytics',
                summary: 'Gained advanced skills in statistical modeling, machine learning, and regression analysis using R, with additional experience in Python and SQL for building relational databases. Completed a dissertation project on advancing statistical models to address missing data in HIV/AIDS surveys, applying comprehensive data science techniques to real-world health data challenges.',
                start: 2023,
                stop: 2014
            },{
                institution: 'Federal Polytechnic Nekede Owerri',
                course: 'HND in Computer Science',
                summary: '',
                start: 2019,
                stop: 2021
            },{
                institution: 'Federal Polytechnic Nekede Owerri',
                course: 'ND in Computer Science',
                summary: '',
                start: 2015,
                stop: 2017
            }
        ]
    }

    const getAboutMe = () => {
        return aboutMe;
    }

    return {
        getAboutMe
    }
}