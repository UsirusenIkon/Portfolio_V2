import languageArr from "../../data/languagesArr";
import "./icons.css"

function Languages() {
  return (
    <ul className="flex box_shadow icons-backdrop">
      <h3>Languages</h3>
      <div className="flex icons-container">
        {languageArr.map((l) => (
          <li className="flex icon-container" key={l.id}>
            <div className="flex backdrop">
              <img className="icon" src={l.icon} alt={l.name} />
            </div>
            <small>{l.name}</small>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Languages;
