import React from 'react';

function Skills() {
  return (
    <div className="Works">
      <h1 style={{ color: "white", fontSize: "55px", textAlign: "center" }}>My Skills</h1>
      <h2 style={{ color: "white", fontSize: "50px", textAlign: "center" }}>What I know</h2>

      <div className="box1">
        <img src="html-5_5968267.png" width="150x" height="150px" alt="HTML" />
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>HTML</p>
      </div>

      <div className="box2">
        <img src="css-3_5968242.png" width="150px" height="150px" alt="CSS" />
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>CSS</p>
      </div>

      <div className="box3">
        <img src="js.png" width="150px" height="150px" alt="JavaScript" />
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>JavaScript</p>
      </div>
      <div className="box4">
        <img src="images.png" width="150px" height="150px" alt="ReactJS" />
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>ReactJS</p>
      </div>
      <div className="box5">
        <img src="github-icon-2.svg" width="150px" height="150px" alt="GitHub" />
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>GitHub</p>
      </div>
    </div>
  );
}

export default Skills;
