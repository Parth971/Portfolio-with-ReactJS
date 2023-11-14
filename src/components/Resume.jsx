import "../assets/css/resume.css";
import { Mortarboard, Briefcase } from 'react-bootstrap-icons';

export default function Resume() {
    return (
        <>
            <section>
                <div className="header d-flex flex-row align-items-center">
                    <div className="header-title">Resume</div>
                    <div className="header-line"></div>
                </div>

                <div className="resume-wraper d-flex justify-content-between">
                    <div className="education">
                        <div className="header d-flex align-items-center">
                            <Mortarboard fill="url(#icon-gradiant)" />
                            <div className="title">Education</div>
                        </div>

                        <div className="detail-box">
                            <div className="time-duration">2018-2022</div>
                            <div className="title">Computer Science and Engineering</div>
                            <div className="school-or-clg">Indus University</div>
                        </div>

                        <div className="detail-box" style={{ backgroundColor: "rgba(255, 227, 191, 0.7)" }}>
                            <div className="time-duration">2017-2018</div>
                            <div className="title">12th</div>
                            <div className="school-or-clg">R.G. Yadav</div>
                        </div>

                    </div>
                    <div className="experience">
                        <div className="header d-flex align-items-center">
                            <Briefcase fill="url(#icon-gradiant)" />
                            <div className="title">Experience</div>
                        </div>

                        <div className="detail-box" style={{ backgroundColor: "rgba(255, 227, 191, 0.7)" }}>
                            <div className="time-duration">2023 - Present</div>
                            <div className="title">Freelancer Developer</div>
                            <div className="school-or-clg">Upwork/Freelancer</div>
                        </div>

                        <div className="detail-box">
                            <div className="time-duration">2022-2023</div>
                            <div className="title">Software Developer (Python)</div>
                            <div className="school-or-clg">Inexture Solutions LLP</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="skills-wraper d-flex justify-content-between">
                <div className="work-skills">
                    <div className="header">
                        <div className="title">Work Skills</div>
                    </div>

                    <div className="skills d-flex flex-wrap">
                        <div className="skill">Python</div>
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JS</div>
                        <div className="skill">jQuery</div>
                        <div className="skill">Django/DRF</div>
                        <div className="skill">FastAPI</div>
                        <div className="skill">Flask</div>
                        <div className="skill">Beautifulsoup</div>
                        <div className="skill">Scrapy</div>
                        <div className="skill">Selenium</div>
                        <div className="skill">ReactJS</div>
                        <div className="skill">Elasticsearch</div>
                        <div className="skill">Matplotlib</div>
                        <div className="skill">AWS Lamda</div>
                        <div className="skill">AWS API Gateway</div>
                        <div className="skill">AWS DyanamoDb</div>
                        <div className="skill">AWS S3 Bucket</div>
                        <div className="skill">AWS EC2</div>
                        <div className="skill">Redis | RabitMQ</div>
                        <div className="skill">Celery</div>
                        <div className="skill">PostgreSQL</div>
                        <div className="skill">SQLite | MySQL</div>
                        <div className="skill">Apache/Nginx Server</div>
                    </div>
                </div>
                <div className="soft-skills">
                    <div className="header">
                        <div className="title">Soft Skills</div>
                    </div>

                    <div className="skills d-flex flex-wrap">
                        <div className="skill">Time management</div>
                        <div className="skill">Interpersonal</div>
                        <div className="skill">Quick learner</div>
                        <div className="skill">Communication</div>
                        <div className="skill">Teamwork</div>
                        <div className="skill">Leadership</div>
                        <div className="skill">Problem solving</div>
                    </div>
                </div>

            </div>
        </>
    );
}