import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import tool1 from "../assets/img/tool1.png";
import tool2 from "../assets/img/tool2.png";
import tool3 from "../assets/img/tool3.png";  
import tool4 from "../assets/img/tool4.png";
import tool5 from "../assets/img/tool5.png";
import tool6 from "../assets/img/tool6.png";  
import tool7 from "../assets/img/tool7.png";
import tool8 from "../assets/img/tool8.png"; 
import project4 from "../assets/img/project4.jpg";  
import liveDemo1 from "../assets/img/liveDemo1.mp4"; 
import project2 from "../assets/img/project2.jpeg";
import demo2 from "../assets/img/demo2.MP4";
import project1 from "../assets/img/project1 (2).png";
import project3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Powered TikTok Content Generator",
      imgUrl: project1,
      techStack: [
        { name: 'Python', img: tool1 },
        { name: 'React', img: tool2 },
        { name: 'FastAPI', img: tool3 }
      ],
    },
    {
      title: "Book Tracker & Reading Journal App",
      imgUrl: project2,
      github: "https://github.com/Leilt-Bereda/Book-tracker-Reading-Journal.git",
      demo: demo2,
      imageClass: 'img-cover',
      techStack: [
        { name: 'Python', img: tool1 },
        { name: 'React', img: tool2 },
        { name: 'Falcon API', img: tool5 }, 
        { name: 'PostgreSQL', img: tool4 }
      ],
    },
    {
      title: "Sign Language Detector",
      description: "Design & Development",
      imgUrl: project3,
      github: "https://github.com/Leilt-Bereda/RealTimeSignLanguageDetector.git",
      techStack: [
        { name: 'Python', img: tool1 },
        { name: 'TensorFlow', img: tool8 }
      ],
    },
    {
      title: "LA SURVIE- The Survival",
      description: "3D Horror Game",
      imgUrl: project4,
      github: "https://github.com/Leilt-Bereda/3D-Game.git",
      demo: liveDemo1,  
      techStack: [
        { name: 'Unity', img: tool6 },
        { name: 'C#', img: tool7 }
      ],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={15}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row className={isVisible ? "animate__animated animate__slideInUp mt-5" : "mt-5"}>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
