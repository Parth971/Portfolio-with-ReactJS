import "../assets/css/about.css"

import { CodeSlash, CodeSquare, Gear, FileEarmarkBreak } from 'react-bootstrap-icons';

export default function About() {
    return (
        <section id="about">
            <div className="header d-flex flex-row align-items-center">
                <div className="header-title">ABOUT ME</div>
                <div className="header-line"></div>
            </div>
            <div className="about-me">
                I'm Parth 😄 an experienced Python developer with 4+ years of expertise in web development, backend engineering, and scripting. With a 100% Job Success Score and satisfied client reviews, I specialize in frameworks like Django and Flask, handling everything from background tasks to social authentication. I excel in web scraping, automation, and scripting using tools like Scrapy and Selenium. Recent projects include a GitHub scrapper, automated mobile apps, and trading automation scripts. What sets me apart? I prioritize client satisfaction, value quality over quantity, and bring a responsive, proactive, and dedicated approach to every project. Let's discuss how I can contribute to your success!💻🌐
            </div>

            <div className="header2">
                <div className="header-title">What I do!</div>
            </div>
            <div className="services d-flex justify-content-center align-content-start flex-wrap">
                <div className="service" style={{ backgroundColor: "#FFEBD0" }}>
                    <div className="service-header d-flex justify-content-start align-items-center">
                        <div className="service-icon">
                            <CodeSlash fill="red" />
                        </div>
                        <div className="service-title">
                            Web Developement
                        </div>
                    </div>
                    <div className="service-content">
                        Elevating your online presence, I specialize in crafting dynamic and responsive websites using leading web frameworks like Django and Flask. From sleek user interfaces to robust backend systems, I bring your digital vision to life with expertise in technologies such as Django Rest Framework, FastAPI, and Flask Restx.
                    </div>
                </div>

                <div className="service" style={{ backgroundColor: "#F2F7FC" }}>
                    <div className="service-header d-flex justify-content-start align-items-center">
                        <div className="service-icon">
                            <Gear fill="blue" />
                        </div>
                        <div className="service-title">
                            Automation
                        </div>
                    </div>
                    <div className="service-content">
                        Streamlining operations with a touch of magic, I leverage automation to eliminate repetitive tasks, optimize data pipelines, and orchestrate complex workflows. From backend processes to intricate task management, my automation solutions enhance efficiency, allowing you to focus on strategic priorities.
                    </div>
                </div>

                <div className="service" style={{ backgroundColor: "#F2F7FC" }}>
                    <div className="service-header d-flex justify-content-start align-items-center">
                        <div className="service-icon">
                            <CodeSquare fill="#06C6A6" />
                        </div>
                        <div className="service-title">
                            Scripting
                        </div>
                    </div>
                    <div className="service-content">
                        Tailoring scripting solutions to your needs, I harness the flexibility of Python to create powerful, customized tools. Whether it's quick data manipulations, intricate system configurations, or automating routine tasks, my scripts are designed for efficiency and enhanced productivity.
                    </div>
                </div>

                <div className="service" style={{ backgroundColor: "#FFEBD0" }}>
                    <div className="service-header d-flex justify-content-start align-items-center">
                        <div className="service-icon">
                            <FileEarmarkBreak fill="#77A5CD" />
                        </div>
                        <div className="service-title">
                            Web Scraping
                        </div>
                    </div>
                    <div className="service-content">
                        Unleashing the power of web scraping, I extract valuable data from online sources to fuel your decision-making processes. Specializing in precision scraping techniques, I navigate the web's vast landscape to provide accurate and actionable insights, from competitor analysis to market research.
                    </div>
                </div>

            </div>
        </section>
    );
}