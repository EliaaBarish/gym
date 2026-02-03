import { useState } from "react";
import "./Schedule.css";
import image1 from "./images/line-dec.png";
import image5 from "./images/sh.jpg";
import image6 from "./images/first-trainer.jpg";
import image7 from "./images/second-trainer.jpg";
import image8 from "./images/third-trainer.jpg";

function Schedule() {
  const [value, setValue] = useState([
    "2:00PM - 3:30PM",
    "",
    "",
    "",
    "",
    "2:00PM - 3:30PM",
    "",
    "",
    "",
    "",
    "",
  ]);

  const show = () => {
    const users = ["", "", "", "", "", "", "", "", "", "", ""];
    users[0] = "10:00AM - 11:30AM";
    users[5] = "2:00PM - 3:30PM";
    setValue(users);
  };

  const show2 = () => {
    const users = ["", "", "", "", "", "", "", "", "", "", ""];
    users[1] = "2:00PM - 3:30PM";
    users[4] = "10:00AM - 11:30AM";
    setValue(users);
  };

  const show3 = () => {
    const users = ["", "", "", "", "", "", "", "", "", "", ""];
    users[6] = "10:00AM - 11:30AM";
    users[9] = "2:00PM - 3:30PM";
    setValue(users);
  };

  const show4 = () => {
    const users = ["", "", "", "", "", "", "", "", "", "", ""];
    users[3] = "2:00PM - 3:30PM";
    users[8] = "10:00AM - 11:30AM";
    setValue(users);
  };

  const show5 = () => {
    const users = ["", "", "", "", "", "", "", "", "", "", ""];
    users[2] = "10:00AM - 11:30AM";
    users[7] = "2:00PM - 3:30PM";
    setValue(users);
  };

  return (
    <>
      <div className="sch" id="schedules">
        <div className="header">
          <div className="overlay"></div>
          <img className="backgroundimg" src={image5} alt="sh" />

          <div className="headerText">
            <h2>
              CLASSES &nbsp;<em>SCHEDULE</em>
            </h2>
            <img src={image1} alt="logo" />
            <p>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </p>
          </div>

          <div className="midlle">
            <ul>
              <li
                onClick={() => {
                  show();
                }}
              >
                Monday
              </li>
              <li
                onClick={() => {
                  show2();
                }}
              >
                Tuesday
              </li>
              <li
                onClick={() => {
                  show3();
                }}
              >
                Wednesday
              </li>
              <li
                onClick={() => {
                  show4();
                }}
              >
                Thursday
              </li>
              <li
                onClick={() => {
                  show5();
                }}
              >
                Friday
              </li>
            </ul>

            <div className="midlleTable col-lg-8">
              <table>
                <tbody>
                  <tr>
                    <td>Fitness Class</td>
                    <td>{value[0]}</td>
                    <td>{value[1]}</td>
                    <td>William G. Stewart</td>
                  </tr>
                  <tr>
                    <td>Muscle Training</td>
                    <td>{value[2]}</td>
                    <td>{value[3]}</td>
                    <td>Paul D. Newman</td>
                  </tr>
                  <tr>
                    <td>Body Building</td>
                    <td>{value[4]}</td>
                    <td>{value[5]}</td>
                    <td>Boyd C. Harris</td>
                  </tr>
                  <tr>
                    <td>Yoga Training Class</td>
                    <td>{value[6]}</td>
                    <td>{value[7]}</td>
                    <td>Hector T. Daigle</td>
                  </tr>
                  <tr>
                    <td>Advanced Training</td>
                    <td>{value[8]}</td>
                    <td>{value[9]}</td>
                    <td>Bret D. Bowers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container footer">
          <div className="footerHeader">
            <h2>
              EXPERT &nbsp;<em>TRAINERS</em>
            </h2>
            <img src={image1} alt="logo" />
            <p>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </p>
          </div>
          <div className="footerfooter">
            <div className="footerCard">
              <img src={image6} alt="firstTrianer" />
              <span>Strength Trainer</span>
              <h4>Bret D. Bowers</h4>
              <p>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </p>
            </div>
            <div className="footerCard">
              <img src={image7} alt="firstTrianer" />
              <span>Muscle Trainer</span>
              <h4>Hector T. Daigl</h4>
              <p>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </p>
            </div>
            <div className="footerCard">
              <img src={image8} alt="firstTrianer" />
              <span>Power Trainer</span>
              <h4>Paul D. Newman</h4>
              <p>
                Bitters cliche tattooed 8-bit distillery mustache. Keytar
                succulents gluten-free vegan church-key pour-over seitan
                flannel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
