import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";
import styles from "./skillspage.module.css";
import Container from '../../reusables/Container/Container';
import { TiSpanner } from 'react-icons/ti';


function SkillsPage() {
  return (
    <Container id="skills" className={`flex ${styles.skillspage}`}>
      <div className={`heading`}>
        <h2 className='flex head'>
          <TiSpanner />Skills
        </h2>
        <p><b>Full-stack Developer</b></p>
      </div>
      <div className={`flex ${styles.components}`}>
        <Tools />
        <Languages  />
        <Frameworks />
      </div>
    </Container>
  )
}

export default SkillsPage;