import React from 'react';

function Footer() {
  return (
    <div className="Connect">
      <div className="Connectheading">
        <p style={{ textAlign: "center", fontSize: "30px" }}>
          <b>Let's Connect Through</b>
        </p>
      </div>
      <div className="sociallinks">
        <a href="mailto:cibinalphonse686970@gmail.com" target="_blank" rel="noreferrer">
          <img src="gmail.png" alt="Gmail Logo" width="40px" height="40px" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="linkedin.png" alt="LinkedIn Logo" width="40px" height="40px" />
        </a>
        <a href="https://instagram.com/cibin_Alphonse" target="_blank" rel="noreferrer">
          <img src="instagram.png" alt="Instagram Logo" width="40px" height="40px" />
        </a>
        <a href="https://wa.me/9551238576" target="_blank" rel="noreferrer">
          <img src="social.png" alt="WhatsApp Logo" width="40px" height="40px" />
        </a>
        <a href="https://github.com/Cibinalphonse" target="_blank" rel="noreferrer">
          <img src="github-icon-2.svg" alt="GitHub Logo" width="40px" height="40px" />
        </a>
      </div>
      <p style={{ textAlign: "center", fontSize: "16px", marginTop: "30px", color: "white" }}>
        © {new Date().getFullYear()} Cibin Alphonse. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
