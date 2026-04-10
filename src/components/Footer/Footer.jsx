import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"; 
import "./footer.css"


const Footer = () => {
    return(
        <>
       


{/* FOOTER */}
      <footer className="footer">

        <h3>Yungkingchi International Ltd.</h3>

        <p>Global Trade | Currency Exchange | Export Services</p>

        <div className="socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTiktok /></a>
        </div>

        <p className="copy">© 2026 All rights reserved</p>

      </footer>
        </>
    );
};

export default Footer;