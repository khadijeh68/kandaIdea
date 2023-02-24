import ApplyRezume from "../../components/applyResume"
import FooterSection from "../../components/footer"
import Items from "../../components/item/index"
import OverView from "../../components/overview"
import Projects from "../../components/projects"
import Slider from "../../components/slider"
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.home}>
     <Items/>
     <Slider/>
     <OverView/>
     <Projects/>
     <ApplyRezume/>
     <FooterSection/>
    </div>
  )
}

export default Home
