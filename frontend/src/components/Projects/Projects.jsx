// components/Projects.jsx
import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Usability from "../../assets/UsabilityHub.png";
import NextBuy from "../../assets/NextBuy.png";
import QrGenerator from "../../assets/QrGenerator.png";
import BgRemover from "../../assets/BgRemover.png";
import Portfolio_1 from "../../assets/Portfolio_1.png";
import PasswordValidator from "../../assets/Password-Validator.png";
import AiTextHumanizer from "../../assets/Ai_text_humanizer.png"
import WeatherApp from "../../assets/WeatherApp.png"
import QuizApp from "../../assets/QuizApp.png";
import ZestyBite from "../../assets/ZestyBite.png";
import QrCode from "../../assets/Qr Code Scanner.jpg";
import TicTacToe from "../../assets/TicTacToe.jpg";
import UrlShort from "../../assets/UrlShort.jpg";
import './Projects.css';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Usability Hub",
      description: "Usability Hub Website using HTML CSS",
      tags: ["HTML", "CSS"],
      demo: "https://anuragggggggggggg.github.io/UsabilityHub/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Website",
      image: Usability
    },
    {
      id: 2,
      title: "NextBuy",
      description: "Real-time product adding, edit, Delete Functionality ",
      tags: ["React", "Express", "Node.js", "MongoDb"],
      demo: "https://productstore-1-bbhh.onrender.com/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/productStore",
      image: NextBuy
    },
    {
      id: 3,
      title: "Portfolio Old",
      description: "1st Portfolio using HTML CSS JS",
      tags: ["HTML", "CSS", "JS"],
      demo: "https://anuragggggggggggg.github.io/Portfolioo/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Portfolioo",
      image: Portfolio_1
    },
    {
      id: 4,
      title: "Qr Code Generator",
      description: "Qr Code Generator For User Input",
      tags: ["React"],
      demo: "https://anuragggggggggggg.github.io/qr-code-generator/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/qr-code-generator/blob/main/src/Qr_Generator.jsx",
      image: QrGenerator
    },
    {
      id: 5,
      title: "Image Background Remover",
      description: "Image Background Remover Using React.js",
      tags: ["React"],
      demo: "https://anuragggggggggggg.github.io/imageBgRemover/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/imageBgRemover",
      image: BgRemover
    },
    {
      id: 6,
      title: "Password Validator",
      description: "This is a password checker which shows ur passowrd is strong or not",
      tags: ["React"],
      demo: "https://anuragggggggggggg.github.io/password-validator/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/password-validator",
      image: PasswordValidator

    },
    {
      id: 7,
      title: "Ai Text Humanizer",
      description: "AI-generated text into natural, human-like content",
      tags: ["React", "Vite", "CSS"],
      demo: "https://anuragggggggggggg.github.io/ai-text-humanizer/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/ai-text-humanizer",
      image: AiTextHumanizer
    },
    {
      id: 8,
      title: "Weather App",
      description: "Get current weather and 5-day forecast by city or zip code, with clear info and helpful error messages.",
      tags: ["React", "Vite", "CSS", "Bootstrap"],
      demo: "https://anuragggggggggggg.github.io/weather-app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/weather-app",
      image: WeatherApp
    },
    {
      id: 9,
      title: "Quiz App",
      description: "Test your knowledge with these quiz questions!",
      tags: ["React", "Vite", "CSS", "Bootstrap", "Open Trivia Database API"],
      demo: "https://anuragggggggggggg.github.io/quiz-app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/quiz-app",
      image: QuizApp
    },
    {
      id: 10,
      title: "Zesty Bite",
      description: "A modern Food Delivery App",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://zesty-bite-iota.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/zesty-bite",
      image: ZestyBite
    },
    {
      id: 11,
      title: "Qr Code Scanner",
      description: "Unlock Seamless QR Scanning with Our Next.js-Powered Solution!",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://qr-plum-zeta.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/Qr",
      image: QrCode
    },
    {
      id: 12,
      title: "Tic Tac Toe",
      description: "Tic Tac Toe the classic game using the latest in modern web development",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://tic-tac-toe-xi-sandy.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/tic-tac-toe",
      image: TicTacToe
    },
    {
      id: 13,
      title: "Url Shortner",
      description: "Privacy-First URL Shortener URL shortening with complete privacy protection",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://url-shortner-ten-beta.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/url_shortner",
      image: UrlShort
    },
    {
      id: 14,
      title: "E‑commerce Website (ShopEasy)",
      description: "Checkout flow with accurate totals, instant status & polished UI",
      tags: ["Next.js", "Tailwind CSS"],
      demo: "https://future-fs-02-red.vercel.app/",
      code: "https://github.com/ANURAGGGGGGGGGGGG/FUTURE_FS_02",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFfZJVmg64kIA/feedshare-shrink_800/B4DZjMg3sLGsAk-/0/1755777827365?e=1759363200&v=beta&t=Y1b5-vgFMbbMhpyGYj5seJHXoMA_tiIXsoypj8nZLqM"
    }

  ];

  const tags = ['All', 'React', 'Vite', 'JS', 'Node.js', 'MongoDb', 'Express', 'HTML', 'CSS', "Next.js"];

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="filter-tags">
          {tags.map(tag => (
            <button
              key={tag}
              className={`tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || '/default-project.jpg'} alt={project.title} />
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="icon" />
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <FiGithub className="icon" />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;