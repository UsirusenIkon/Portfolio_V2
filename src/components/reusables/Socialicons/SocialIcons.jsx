import socialItems from './socialItems';
import styles from './socialIcons.module.css';

function SocialIcons({className}) {
  return (
    <ul className={`flex animate ${styles.icon_container}`}>
      {socialItems.map((item) => (
        <a href={item.link}
          key={item.id} 
          className={`flex ${styles.icon_item}`}>
          <img
            className={`animate  ${className} ${styles.icon_img}`}
            src={item.icon}
            alt={item.name}
          />
        </a>
      ))}
    </ul>
  );
}

export default SocialIcons;
