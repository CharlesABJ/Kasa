import DropDown from "./DropDown";
import "../styles/components/DropDownZone.css";

function DropDownZone() {
  const dropValue = ["Fiabilite", "Respect", "Service", "Sécurité"];

  return (
    <ul className="drop-down-zone">
      {dropValue.map((e, index) => (
        <DropDown key={index} label={e} />
      ))}
    </ul>
  );
}

export default DropDownZone;
