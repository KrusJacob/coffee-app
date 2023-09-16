import AboutItem from "../about-item/AboutItem";
import CoffeeCatalog from "../coffee-catalog/coffee-catalog";

import img from "../app/img/aboutOurGoods.png";

import "./forYouPleasurePage.css";

const title = "About our goods";

const descr =
  "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel  met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.";

const ForYouPleasurePage = (props) => {
  return (
    <>
      <div className="pleasure__header">
        <h2 className="coffee__header-title">For your pleasure</h2>
      </div>
      <AboutItem img={img} title={title} descr={descr} />
      <CoffeeCatalog data={props.data} />
    </>
  );
};

export default ForYouPleasurePage;
