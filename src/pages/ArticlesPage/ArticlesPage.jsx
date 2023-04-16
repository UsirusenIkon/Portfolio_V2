import { Link } from 'react-router-dom';
import Container from '../../reusables/Container/Container';
import styles from './articles.module.css';
import articlesData from '../../data/articlesData';
import Button from '../../reusables/Button/Button';
import { RiArrowGoBackFill } from 'react-icons/ri';

function ArticlesPage() {
  return (
    <Container id="id" className={`flex ${styles.articles}`}>
      <h1 className="head">Articles</h1>
      <Link to="/" 
        title="back"
        className="btn back">
        <RiArrowGoBackFill />
      </Link>
      {articlesData.map((item) => (
        <div className={`flex ${styles.item}`} key={item.id}>
          <img
            className={styles.item_image}
            src={item.featuredImage.url}
            alt={item.featuredImage.alt}
          />
          <div className={`flex ${styles.item_link}`}>
            <h5>{item.title}</h5>
            <Link target="_blank" to={item.link}>
              <Button text="See article" className={styles.btn}/>
            </Link>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default ArticlesPage;
