import "./CardClasses.css";

function CardClasses(props) {
  return (
    <>
      <div className="classesCard">
        <img className="classesCardImge" src={props.image} alt="training" />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default CardClasses;
