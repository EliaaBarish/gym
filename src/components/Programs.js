import "./Programs.css";
import image1 from "./images/line-dec.png";
import image2 from "./images/cta-bg.jpg";
import CardLi from "./CardLi";

function Programs() {
  return (
    <>
      <div className="parent" id="about">
        <div className="ro">
          <h2>
            choose &nbsp;<em>program</em>
          </h2>
          <img src={image1} alt="logo" />
          <p>
            Training Studio is free CSS template for gyms and fitness centers.
            You are allowed to use this layout for your business website.
          </p>
        </div>

        <div className="container">
          <div className="crd">
            <div className="co">
              <ul className="parent">
                <CardLi
                  title="Basic Fitness"
                  discraption="Please do not re-distribute this template ZIP file on any template
                            collection website. This is not allowed."
                />
                <CardLi
                  title="New Gym Training"
                  discraption="If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot."
                />
                <CardLi
                  title="Basic Muscle Course"
                  discraption="Credit goes to Pexels website for images and video background used in this HTML template."
                />
              </ul>
            </div>
            <div className="co">
              <ul className="parent">
                <CardLi
                  title="Advanced Muscle Course"
                  discraption="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
                />
                <CardLi
                  title="Yoga Training"
                  discraption="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections."
                />
                <CardLi
                  title="Body Building Course"
                  discraption="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
                />
              </ul>
            </div>
          </div>
        </div>

        <div className="lastAbout">
          <img src={image2} about="sport machain" />
          <div className="lastAboutText">
            <h2>
              DON’T &nbsp;<em>THINK</em>, BEGIN &nbsp;<em>TODAY</em>!
            </h2>
            <p>
              Ut consectetur, metus sit amet aliquet placerat, enim est
              ultricies ligula, sit amet dapibus odio augue eget libero. Morbi
              tempus mauris a nisi luctus imperdiet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
