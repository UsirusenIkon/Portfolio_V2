import { Link } from 'react-router-dom';
import socialItems from '../../data/socialItems';
import styles from './socialIcons.module.css';

function SocialIcons(className) {
  return (
    <div className={`flex animate ${styles.icon_container}`}>
      {socialItems.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          target='_blank'
          title={item.name}
          className={`flex ${styles.icon_item} ${className}`}
        >
          <span className={`${styles.icon_img}`}>
            {item.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;
