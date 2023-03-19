import toolKit from "./toolkit";
import "../icons.css"

function Tools() {
  return (
    <ul className="flex animate box_shadow icons-backdrop">
      <h3>Tools</h3>
      <div className="flex icons-container">
        {toolKit.map((tool) => (
          <li className="flex icon-container" key={tool.id}>
            <div className="flex backdrop">
              <img className="icon" src={tool.icon} alt={tool.name} />
            </div>
            <small>{tool.name}</small>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Tools;
