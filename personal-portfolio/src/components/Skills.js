import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="skill-intro">What skills I have</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="skill-card">
                    <h4>Programming Languages</h4>
                    <ul className="skill-list">
                      <li>Python</li>
                      <li>Java </li>
                      <li>C/C#</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="skill-card">
                    <h4>Web & Database</h4>
                    <ul className="skill-list">
                      <li>HTML/ CSS</li>
                      <li>React</li>
                      <li>PostgreSQL</li>
                      <li>REST API</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="skill-card">
                    <h4>Technical Skills</h4>
                    <ul className="skill-list">
                      <li>Full Stack Development</li>
                      <li>Object Oriented Programming</li>
                      <li>Data Structures & Algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
