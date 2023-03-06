import Languages from "./Languages/Languages";
import Frameworks from "./Frameworks/Frameworks";
import Tools from "./Tools/Tools";
import styles from "./skillspage.module.css";

function SkillsPage() {
  return (
    <div id="skills" className={`flex ${styles.skillspage}`}>
      <h2 className='heading'>Skills<br />
        <small>Full-stack Developer</small>
      </h2>
      <div className={`flex ${styles.components}`}>
        <Languages  />
        <Frameworks />
        <Tools />
      </div>
    </div>
  )
}

export default SkillsPage;