import React, { useState, useEffect, useRef } from 'react'
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, demo, techStack, imageClass }) => {
  const [touchActive, setTouchActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setTouchActive(false);
    };
    const handleEsc = (e) => { if (e.key === 'Escape') setTouchActive(false); };
    document.addEventListener('click', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleCardClick = (e) => {
    if (!isTouch) return; // keep desktop hover/click behaviour
    if (!touchActive) {
      setTouchActive(true);
      e.stopPropagation();
    }
  };

  const handleLinkClick = (e) => {
    if (isTouch && !touchActive) {
      // first tap opens overlay instead of navigating
      e.preventDefault();
      setTouchActive(true);
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        ref={ref}
        className={`proj-imgbx ${touchActive ? 'touch-active' : ''}`}
        onClick={handleCardClick}
        role={isTouch ? 'button' : undefined}
      >
        <div className="proj-img">
          <img className={imageClass || ''} src={imgUrl} alt={title} />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          {techStack && techStack.length ? (
            <div className="tech-bubbles">
              {techStack.map((tech, i) => (
                <div className="tech-bubble" key={i} title={tech.name || `tech-${i}`}>
                  <img src={tech.img || tech} alt={tech.name || `tech-${i}`} />
                </div>
              ))}
            </div>
          ) : (
            <span>{description}</span>
          )}
          <div className="proj-links">
            {github && (
              <a onClick={handleLinkClick} href={github} target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
            )}
            {demo && (
              <a onClick={handleLinkClick} href={demo} target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
            )}
          </div>
        </div>
      </div>
    </Col>
  )
}
