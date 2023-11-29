import { Image } from "react-bootstrap";
import "../assets/css/work.css";

import bootstrap_website_theme_naruto from "../assets/images/works/bootstrap_website_theme_naruto.png";
import github_scraper_pure_selenium from "../assets/images/works/github_scraper_pure_selenium.png";
import news_website from "../assets/images/works/news_website.png";
import parth_desai_website from "../assets/images/works/parth_desai_website.jpg";
import portfolio_website from "../assets/images/works/portfolio_website.png";
import todo_and_calculator_javascript_project from "../assets/images/works/todo_and_calculator_javascript_project.jpg";

export default function Work() {
    return (
        <section>
            <div className="header d-flex flex-row align-items-center">
                <div className="header-title">Work</div>
                <div className="header-line"></div>
            </div>

            <div className="works-wraper d-flex align-content-start justify-content-center flex-wrap">
                <div className="work-box">
                    <Image src={bootstrap_website_theme_naruto} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">Bootstrap Website Theme Naruto</div>
                    </div>
                </div>
                <div className="work-box">
                    <Image src={github_scraper_pure_selenium} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">Github Scraper Pure Selenium</div>
                    </div>
                </div>
                <div className="work-box">
                    <Image src={news_website} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">News Website</div>
                    </div>
                </div>
                <div className="work-box">
                    <Image src={parth_desai_website} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">Parth Desai Website</div>
                    </div>
                </div>
                <div className="work-box">
                    <Image src={portfolio_website} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">Portfolio Website</div>
                    </div>
                </div>
                <div className="work-box">
                    <Image src={todo_and_calculator_javascript_project} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">Todo And Calculator Javascript Project</div>
                    </div>
                </div>
            </div>

        </section>
    );
}