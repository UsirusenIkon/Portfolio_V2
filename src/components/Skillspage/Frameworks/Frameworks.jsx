import libraries from "./libraries";
import "../icons.css"

function Frameworks() {
  return (
    <ul className="flex animate icons-backdrop">
      <h3>Frameworks</h3>
      <div className="flex icons-container">
        {libraries.map((l) => (
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

export default Frameworks;
