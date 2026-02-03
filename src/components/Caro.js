import "./Caro.css";
import vid1 from "./images/gym-video.mp4";

function Caro() {
  return (
    <div className="caro">
      <div className="overlay"></div>
      <video
        src={vid1}
        muted
        autoPlay
        loop
        className="d-block w-150 height-600"
      ></video>
      <div className="content">
        <h6>WORK HARDER, GET STRONGER</h6>
        <p>
          EASY WITH OUR <em>GYM</em>
        </p>
      </div>
    </div>
  );
}

export default Caro;
