import styles from "./projects.module.css";
import Down from "../../assets/images/Down.png";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import six from "../../assets/images/six.png";
import seven from "../../assets/images/seven.png";
import eight from "../../assets/images/eight.png";

const Projects = () => {
  return (
    <div className={styles.projects}>
      {/* <div  className={styles.create}>
        <p>We create</p>
      </div> */}

      <h4>Our Projects</h4>
      <p>Discover the next inspiring talks industry</p>
      <div className={styles.projects_container}>
        <div>
          <img
            src={Down}
            alt="arrowDown-icon"
            className={styles.overview_arrowDown}
          />
        </div>
        <div>
          <div  className={styles.projects_image}>
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
          </div>

          <div  className={styles.projects_image}>
            <img src={four} alt="" />
            <img src={five} alt="" />
          </div>

          <div  className={styles.projects_image}>
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
