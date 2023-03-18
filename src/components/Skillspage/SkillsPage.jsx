import BuildIcon from '@mui/icons-material/Build';
import CallIcon from '@mui/icons-material/Call';
import Languages from "./Languages/Languages";
import Frameworks from "./Frameworks/Frameworks";
import Tools from "./Tools/Tools";
import styles from "./skillspage.module.css";

function SkillsPage() {
  return (
    <div id="skills" className={`flex ${styles.skillspage}`}>
      <div className={`heading`}>
        <h2 className='flex head'>
          <BuildIcon />Skills
        </h2>
        <p><b>Full-stack Developer</b></p>
      </div>
      <div className={`flex ${styles.components}`}>
        <Languages  />
        <Frameworks />
        <Tools />
      </div>
    </div>
  )
}

export default SkillsPage;