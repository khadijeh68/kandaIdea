import { NavLink } from "react-router-dom";
import kandaideaSvg from "../../assets/images/kandaideaSvg.png";
import menuButton from "../../assets/images/menuButton.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.navbar}>
        <NavLink to="/">
          <img src={kandaideaSvg} alt="kandaIdea-logo" className={styles.img} />
        </NavLink>

        <ul className={styles.menu}>
          <li className={styles.language}>
            <span> Choose Language : </span>
            <NavLink to="/">
              <span class="text-muted"> En </span>  /Fa
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img
                src={menuButton}
                alt="menu-button"
                className={styles.menuButton}
              />
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
