import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const experiences = [
    {
      role: "Intern — Software Engineer Bootcamp",
      company: "GoDaddy",
      period: "Jun 2025 - July 2025",
      points: [
       
        "Selected as one of 10 participants from over 200 applicants",
        "Completed technical training in HTML/CSS/JavaScript, React, Docker, Web API design, CI/CD, containerization, and unit testing",
        "Participated in a 1-day hackathon to develop an AI-powered content generator using Python, FastAPI, and GoDaddy's CaaS API"

      ]
    },
    {
      role: "AI Trainer",
      company: " Outlier",
      period: "Oct 2024 - Dec 2024",
      points: [
        "Annotated AI-generated responses to Math-related projects",
        "Identified logical inconsistencies and refined step-by-step solutions for accuracy",
        "Curated high-quality math training data and refined response logics to improve AI performance"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">My Experience</h2>
                  <Row className="experience-list">
                    {experiences.map((exp, idx) => (
                      <Col key={idx} xs={6} className="d-flex">
                        <div className="experience-item card w-150">
                          <div className="card-body">
                            <h4 className="card-title">{exp.role} — <small>{exp.company}</small></h4>
                            <span className="period">{exp.period}</span>
                            <ul className="experience-points">
                              {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
