import { useState } from "react";
import ClassesData from "../Data/ClassesData";
import CardClasses from "./CardClasses";
import "./Classes.css";
import image1 from "./images/line-dec.png";
import image3 from "./images/tabs-first-icon.png";

function Classes() {
  const card = (item) => {
    return (
      <CardClasses
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  };

  const [value, setValue] = useState(card(ClassesData[0]));

  const set = (item) => {
    setValue(card(item));
  };

  return (
    <>
      <div className="container" id="classes">
        <div className="row cls">
          <div className="ro">
            <h2>
              OUR &nbsp;<em>CLASSES</em>
            </h2>
            <img src={image1} alt="logo" />
            <p>
              Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
              viverra ipsum dolor, ultricies fermentum massa consequat eu.
            </p>
          </div>

          <div className="container d1">
            <div className=" classesType">
              <ul>
                {ClassesData.map((item) => {
                  return (
                    <li onClick={() => set(item)}>
                      <div className="liDiv">
                        <img src={image3} alt="dampl" />
                        <p>{item.title}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lefa">{value}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Classes;
