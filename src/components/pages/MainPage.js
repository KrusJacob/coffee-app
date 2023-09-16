import { Helmet } from "react-helmet";

import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";

import Divider from "../divider/divider";

import "./mainPage.css";

const MainPage = (props) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Coffee house" />
        <title>Coffee house</title>
      </Helmet>
      <div className="header">
        <h2 className="header-title">Everything You Love About Coffee</h2>
        <Divider color="white" />
        <p>
          We makes every day full of energy and taste <br></br>
          Want to try our beans?
        </p>

        <a href="#aboutUs" className="btn btn-outline-light">
          More
        </a>
      </div>
      <AboutUs />
      <OurBest data={props.data}></OurBest>
    </>
  );
};

export default MainPage;
