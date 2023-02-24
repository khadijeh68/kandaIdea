import styles from "./slider.module.css";
import $ from "jquery";
import arrow from "../../assets/images/arrow.png";

const Slider = () => {
    $(function () {
        $("#slideshow_title").hide()
        $("#slideshow p")
          .fadeOut(5000)
          .$("#slideshow h4").hide()
          .$("#slideshow_title").show().$("#slideshow p")
          .fadeIn(1000)
    });

  return (
    <div className={styles.slider}>
      <div id="slideshow">
        <h4 className={styles.item}>
          <img src={arrow} alt="icon" />
          RESEARCH & DEVELOPMENT
        </h4>
        <hr />
        <p>
          SERVICES & SOLUTIONS
          <br /> Over 15 years of experience in engineering services consultancy
          and with the taking advantage of expert human resources, Kanda Idea
          provides a wide range of services and solutions and become one of the
          leading consultants in the region.
        </p>
        <h4 id="slideshow_title">
          <img src={arrow} alt="icon" />
          RESEARCH & DEVELOPMENT
        </h4>
      </div>
    </div>
  );
};

export default Slider;
