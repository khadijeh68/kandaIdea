import styles from "./applyResume.module.css";

const ApplyRezume = () => {
  return (
    <div className={styles.ApplyRezume}>
      <div class="container">
        <div className="row justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h5>Dont miss the oppurtunity you can handle it!</h5>
            <div>
              <button className="btn btn-primary">APPLY RESUME</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyRezume;
