export const usePortfolioData = () => {

    const portfolio = [
        {
            id: 1,
            title: "Operational Efficiency Project | Royal Naval Base, Ministry of Defence, UK",
            goal: "Collaborated as part of a team commissioned through the Ministry of Defence's HACK4MOD programme to address tool management challenges across Royal Naval Bases in the UK. The objective was to improve accountability, reduce tool losses, and enhance operational efficiency.",
            projectActivities: [
                'Conducted on-site visits to three different naval bases and carried out structured interviews with senior officers, including commanders, lieutenants, and technical staff, to fully understand operational pain points.',
                'Identified systemic issues with missing tools, which created operational delays and increased costs.',
                {
                    leadingText: 'Proposed three potential solutions:',
                    collections: [
                        'A reflective tape labeling system to enhance tool visibility and accountability.',
                        'Integration of electronic tracking devices on high-value tools.',
                        'A centralized digital tracking system for tool movement across departments.'
                    ]
                },
                'Developed and tested a minimum viable product (MVP) using reflective tape for labeling, which provided immediate improvements in tool identification and accountability.'
            ],
            impactAndRecognition: [
                'The project delivered actionable recommendations directly to military stakeholders, addressing both short-term needs and long-term strategic improvements.',
                "Recognition received from the Ministry of Defence HACK4MOD programme, acknowledging the team's contribution to operational innovation. Verification of this recognition is available on LinkedIn."
            ],
            keyContributions: [],
            skillsAndTools: "Operational research, stakeholder interviews, prototyping, problem-solving, MVP development, teamwork, process improvement, applied analytics in military logistics.",
            githubRepo: {
                linkedText: '',
                url: ''
            }
        },{
            id: 2,
            title: "Restaurant Order Management System",
            goal: 'Designed a database and desktop application for a local food delivery service, migrating operations from static CSV files to a dynamic management system.',
            projectActivities: [],
            impactAndRecognition: [],
            keyContributions: [
                {
                    title: 'Database Architecture',
                    body: 'Created a full ERD to model restaurant operations, applying normalization principles to achieve 3NF and iteratively refining schema design to match evolving requirements.'
                },{
                    title: 'Software Development',
                    body: 'Built a Python-based desktop application with a Tkinter GUI to manage operations, update records, and generate analytics. Integrated error handling for reliable user interaction.'
                },{
                    title: 'Data Management',
                    body: 'Processed raw CSV data, applied systematic cleaning, and populated a structured database. Developed SQL schemas and queries for data retrieval and analysis.'
                },{
                    title: 'Analytics & Visualization',
                    body: 'Implemented functions to calculate business metrics (e.g., average customer ratings) and visualized delivery times with Matplotlib.'
                }
            ],
            skillsAndTools: "Python, SQL, SQLite, ERD design, Tkinter, Matplotlib, data cleaning, relational database normalization, application development.",
            githubRepo: {
                linkedText: 'Project Repo',
                url: 'https://github.com/chinonso-okoroafor/restaurant-database-gui.git'
            }
        },{
            id: 3,
            title: "Machine Learning & Statistical Analysis of Seismic and Business Data",
            goal: 'Developed machine learning models for seismic event classification and applied advanced statistical inference techniques to business and environmental datasets.',
            projectActivities: [],
            impactAndRecognition: [],
            keyContributions: [
                {
                    title: 'Seismic Event Classification',
                    contributions: [
                        "Applied exploratory analysis to identify class imbalance and guide modeling.",
                        "Built and validated Decision Tree and KNN models, tuning hyperparameters with cross-validation.",
                        "Used Leave-One-Out Cross-Validation for reliable model evaluation in a small dataset.",
                        "Compared models on multiple metrics and selected Decision Tree for interpretability and performance.",
                        "Supplemented analysis with K-Means clustering, optimizing clusters through the Elbow Method.",
                    ]
                },{
                    title: 'Statistical Inference',
                    contributions: [
                        "Conducted frequentist analysis with ANOVA and post-hoc Tukey tests.",
                        "Built Bayesian ANOVA models using MCMC methods, interpreting posterior distributions and convergence diagnostics.",
                        "Compared Bayesian models with Deviance Information Criterion (DIC)."
                    ]
                }
            ],
            skillsAndTools: "R, supervised and unsupervised learning, hyperparameter tuning, cross-validation, ANOVA, Bayesian inference, MCMC, ggplot2, clustering, model diagnostics",
            githubRepo: {
                linkedText: 'Project Repo',
                url: 'https://github.com/chinonso-okoroafor/machine-learning-task.git'
            }
        },{
            id: 4,
            title: "Analysis and Prediction of Credit Card Default",
            goal: 'Developed a predictive model to identify potential credit card defaulters using machine learning techniques. The project aimed to demonstrate how data-driven methods can support financial institutions in managing risk, improving decision-making, and enhancing customer profiling. ',
            projectActivities: [],
            impactAndRecognition: [],
            keyContributions: [
                {
                    title: 'Data Collection & Preparation',
                    body: 'Utilized a Kaggle dataset (3,000 rows, 25 columns). Conducted data cleaning, preprocessing, and feature selection to ensure accuracy and consistency for model training.'
                },{
                    title: 'Exploratory Data Analysis',
                    body: 'Performed statistical analysis to uncover demographic and behavioural trends among defaulters, including higher default rates among females and individuals with university or graduate-level education.'
                },{
                    title: 'Machine Learning Development',
                    body: 'Built and evaluated classification models to predict default risk. Implemented a Decision Tree model achieving 82.01% accuracy, which outperformed a Random Forest model at 81.50%, demonstrating the robustness of tree-based methods for financial classification problems.'
                },{
                    title: 'Insight Communication',
                    body: 'Designed a scientific poster to present findings. Used pie charts and bar graphs to communicate demographic patterns and consumer payment behaviours, making results accessible to both technical and non-technical audiences.'
                }
            ],
            skillsAndTools: "Python, Decision Trees, Random Forests, Predictive Modelling, Exploratory Data Analysis (EDA), Statistical Analysis, Kaggle, Matplotlib, Seaborn, Data Storytelling, Poster Design.",
            githubRepo: {
                linkedText: 'Project Repo',
                url: 'https://github.com/chinonso-okoroafor/credit-card-default-prediction.git'
            }
        },{
            id: 5,
            title: "Comparative Financial Analysis of Rightmove PLC and WPP PLC",
            goal: 'Evaluated financial health and investment potential of two companies from distinct industries through comparative analysis.',
            projectActivities: [],
            impactAndRecognition: [],
            keyContributions: [
                {
                    title: 'Financial Statement Analysis',
                    body: 'Conducted horizontal and vertical analysis to benchmark performance.'
                },{
                    title: 'Ratio Analysis',
                    body: 'Assessed liquidity, profitability, efficiency, and leverage, identifying business model strengths and risks.'
                },{
                    title: 'Valuation and Investment',
                    body: 'Applied CAPM and Security Market Line (SML) to assess risk-return profiles, identifying Rightmove as undervalued relative to WPP.'
                },{
                    title: 'Strategic Recommendations',
                    body: 'Suggested liquidity improvements for WPP and growth opportunities for Rightmove based on financial positioning.'
                }
            ],
            skillsAndTools: "R, Excel, CAPM, ratio analysis, financial statement analysis, investment appraisal, strategic communication.",
            githubRepo: {
                linkedText: 'Project Repo',
                url: 'git@github.com:chinonso-okoroafor/financial-analysis-project.git'
            }
        },{
            id: 6,
            title: "Sentiment and Trend Analysis of COVID-19 Tweets",
            goal: 'Analyzed over 41,000 tweets to track public sentiment and behavioral patterns during the early COVID-19 outbreak.',
            projectActivities: [],
            impactAndRecognition: [],
            keyContributions: [
                {
                    title: 'Data Handling',
                    body: 'Processed and analyzed large-scale unstructured text data.'
                },{
                    title: 'EDA and Visualization',
                    body: 'Identified geographic and temporal trends, visualizing results with bar charts and histograms.'
                },{
                    title: 'NLP and Text Mining',
                    body: 'Extracted themes, conducted sentiment analysis, and visualized results through word frequency analysis and word clouds.'
                },{
                    title: 'Social Network Analysis',
                    body: 'Applied bigram network analysis to uncover contextual relationships between words.'
                },{
                    title: 'Strategic Recommendations',
                    body: 'Highlighted dataset limitations and proposed policy responses to improve crisis communication.'
                }
            ],
            skillsAndTools: "R, NLP, sentiment analysis, word frequency analysis, bigram analysis, network visualization, social media analytics.",
            githubRepo: {
                linkedText: 'Project Repo',
                url: 'https://github.com/chinonso-okoroafor/covid19-twitter-sentiment.git'
            }
        },{
            id: 7,
            title: "Advancing Statistical Models for Addressing Missing Data in HIV/AIDS Surveys",
            goal: 'Developed and compared machine learning and statistical models to improve imputation of missing values in HIV/AIDS survey data, enhancing reliability for public health decision-making.',
            projectActivities: [],
            impactAndRecognition: [],
            keyContributions: [
                {
                    title: 'Independent Research',
                    body: 'Defined objectives, conducted literature review, and executed an end-to-end research project.'
                },{
                    title: 'Data Handling',
                    body: 'Managed sensitive healthcare data, identifying patterns of missingness (MCAR, MAR, NMAR).'
                },{
                    title: 'Model Development',
                    body: 'Implemented supervised, unsupervised, and statistical models, including Random Forest, K-Means, and Heckman selection models.'
                },{
                    title: 'Evaluation',
                    body: 'Benchmarked models using multiple metrics, identifying Random Forest as the best-performing with 97.7% accuracy and 99.7% precision.'
                },{
                    title: 'Impact',
                    body: 'Developed actionable guidelines for missing data management in future health studies.'
                }
            ],
            skillsAndTools: "Python, R, Random Forest, Decision Tree, K-Means, Heckman Selection Model, imputation, evaluation metrics, public health analytics.",
            githubRepo: {
                linkedText: 'Project Repo',
                url: 'https://github.com/chinonso-okoroafor/hiv-missing-data-imputation.git'
            }
        }
    ];

    const getPortfolio = () => {
        return portfolio;
    }

    return {
        getPortfolio
    }
}