import { Helmet } from "react-helmet";

import Filter from "../filter/filter";
import CoffeeCatalog from "../coffee-catalog/coffee-catalog";
import AboutItem from "../about-item/AboutItem";

import "./ourCoffeePage.css";

import img from "../app/img/about-our-beans.jpg";

const title = "About our beans";
const descr =
  "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel  met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.";

const OurCoffeePage = ({ onChangeTerm, onChangeFilter, data, filter, loading }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Our coffee" />
        <title>Our coffee</title>
      </Helmet>
      <div className="coffee__header">
        <h2 className="coffee__header-title">Our Coffee</h2>
      </div>
      <AboutItem img={img} title={title} descr={descr} />
      <Filter onChangeTerm={onChangeTerm} onChangeFilter={onChangeFilter} filter={filter} />
      {loading ? (
        <h4 className="coffee__info">Loading...</h4>
      ) : data.length ? (
        <CoffeeCatalog data={data} />
      ) : (
        <h4 className="coffee__info">Not found</h4>
      )}
    </>
  );
};

export default OurCoffeePage;
