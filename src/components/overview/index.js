import styles from "./overview.module.css";
import Down from "../../assets/images/Down.png";
import overview from "../../assets/images/overview.png";

const OverView = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview_container}>
        <div>
          <img
            src={Down}
            alt="arrowDown-icon"
            className={styles.overview_arrowDown}
          />
        </div>

        <div>
          <div>
            <h4>OVERVIEW</h4>
            <p className="text-primary fs-5">
              THE CONFLUENCE OF
              <br />
              ENGINEERING & CREATIVITY
            </p>
            <p>
              Kanda Idea is a leading Iranian company with a long-term
              successful experience in providing technology-based engineering,
              monitoring (supervising), and management services in
              mega-projects, enterprises, and the public sector.
            </p>
          </div>
        </div>

        <div className={styles.overview_image}>
          <img src={overview} alt="overview" />
        </div>
      </div>
      <div className={styles.rowTwo}>
        <div className="">
          <h5>530,000</h5>
          <p>M/H work</p>
        </div>
        <div className="">
          <h5>200,000</h5>
          <p>Lines of Code</p>
        </div>
        <div className="">
          <h5>75</h5>
          <p>Fields</p>
          <p className="text-muted">WORLDWIDE</p>
        </div>
        <div className="">
          <h5>45</h5>
          <p>Active</p>
          <p className="text-muted">& COMPLETED</p>
          <p className="text-muted">PROJECTS</p>
        </div>
        <div className="">
          <h5>150</h5>
          <p>Personnel</p>
          <p className="text-muted">Full-time</p>
          <p className="text-muted">& Part-Time</p>
          <p className="text-muted">Colleagues</p>
        </div>
        <div className="">
          <h5>30</h5>
          <p>Master</p>
          <p className="text-muted">and phD STUDENTS</p>
        </div>
      </div>
      
    </div>
  );
};

export default OverView;
