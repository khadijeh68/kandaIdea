import styles from "./footer.module.css";
import secondLogo from "../../assets/images/secondLogo.png";
import aparatLogo from "../../assets/images/aparatLogo.png";
import { BsArrowUp } from "react-icons/bs";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="d-flex flex-column justify-content-start">
          <h4>
            <a href="/">
              <BsArrowUp />
            </a>
            INDUSTRIES
          </h4>
          <ul>
            <li>
              <a href="/">Maritime</a>
            </li>
            <li>
              <a href="/">Oil & Gas</a>
            </li>
            <li>
              <a href="/">Telecommunication</a>
            </li>
            <li>
              <a href="/">Agriculture</a>
            </li>
            <li>
              <a href="/">Roads & Cities</a>
            </li>
            <li>
              <a href="/">IT Infrastructure</a>
            </li>
          </ul>
        </div>
        <div  className="d-flex flex-column align-items-center">
          <h4>SERVICES</h4>
          <ul>
            <li>
              <a href="/">Data Providing</a>
            </li>
            <li>
              <a href="/">Data Engineering</a>
            </li>
            <li>
              <a href="/">Engineering Design</a>
            </li>
            <li>
              <a href="/">GIS & Geomatic</a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h4>COOPERATION</h4>
          <ul>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Get Job</a>
            </li>
            <li>
              <a href="/">About Kanda Idea</a>
            </li>
            <li>
              <a href="/">GIS & Geomatic</a>
            </li>
          </ul>
          <br />
          <p>
            Change Language :<br />
            <span>
              <a href="/">Fa</a>
              <span>/</span>
              <a href="/" className="text-muted">
                En
              </a>
            </span>
          </p>
        </div>
        <div>
          <div className={styles.secondLogo}>
            <a href="/">
              <img src={secondLogo} alt="secondLogo" />
            </a>
          </div>
        </div>
      </footer>
      <div className={styles.contact}>
        <div className={styles.left_contact}>
        <ul className="d-flex px-2 align-items-center">
          <li>
            <a href="https://www.linkedin.com/kandaIdea" className="px-2">
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kandaIdea" className="px-2">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.aparat.com/kandaIdea" className="px-2">
              <img
                src={aparatLogo}
                alt="aparat Logo"
                style={{ width: "18px", height: "18px" }}
              />
            </a>
          </li>
        </ul>
        <button type="button" className="btn btn-outline-secondary">Media Center</button>
        </div>
          <p className="mx-5">Copyright &copy; 2020. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
