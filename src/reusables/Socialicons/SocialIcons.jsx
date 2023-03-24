import socialItems from '../../data/socialItems';
import styles from './socialIcons.module.css';

function SocialIcons({className}) {
  return (
    <ul className={`flex animate ${styles.icon_container}`}>
      {socialItems.map((item) => (
        <a href={item.link}
          key={item.id} 
          className={`flex ${styles.icon_item}`}>
          <span
            className={`animate ${className} ${styles.icon_img}`}
            >
            {item.icon}
          </span>
        </a>
      ))}
    </ul>
  );
}

export default SocialIcons;
