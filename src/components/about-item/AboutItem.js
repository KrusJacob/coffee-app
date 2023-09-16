import Divider from "../divider/divider";

import "./aboutItem.css";

const AboutItem = (props) => {
  const { img, title, descr } = props;

  return (
    <>
      <div className="about-item">
        <img src={img} className="about-item__img"></img>
        <div className="about-item__text">
          <h4>{title}</h4>
          <Divider color={"black"} />
          <p>{descr}</p>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default AboutItem;
