import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Button from "../reusables/Button/Button";
import Carousel from "../reusables/Carousel/Carousel";
import styles from "./projects.module.css";

function ProjectsPage() {
  return (
    <div id='projects' className={`flex ${styles.projects_container}`}>
      <div className={`heading`}>
        <h2 className='flex head'>
          <AutoStoriesIcon />Projects
        </h2>
        <p><b>Recent Works</b></p>
      </div>
      <div className={`flex ${styles.projects_content}`}>
        <div className={`flex ${styles.works}`}>
          <h4>A Record of My Works</h4>
          <p>A list of all my projects, both solo and collaborative works</p>
          <Button
            className={styles.btn1}
            text="See Projects"
          />
        </div>
        <div className={`flex ${styles.articles}`}>
          <h4>A Record of My Articles</h4>
          <p>A list of all my Articles</p>
          <Button 
            className={styles.btn}
            text="See Articles"
          />
        </div>
      </div>
      {/* <Carousel /> */}
    </div>
  )
}

export default ProjectsPage;
