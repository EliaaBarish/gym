import "./CardLi.css";
import image2 from "./images/features-first-icon.png";

function CardLi(props) {
  return (
    <li className="li-son">
      <div className="left-icon">
        <img src={image2} alt="dambol" />
      </div>
      <div className="right-content">
        <h4>{props.title}</h4>
        <p>{props.discraption}</p>
      </div>
    </li>
  );
}
export default CardLi;
