import mainLogo from "../../assets/images/mainLogo.png";
import styles from "./items.module.css";

const Items = () => {
  return (
    <span className={styles.items}>
    <img src={mainLogo} alt="mainLogo" />
        <span>CREATIVE ENGINEERING EXPERIENCE</span>
    </span>
  );
};

export default Items;
