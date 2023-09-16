import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import Divider from "../divider/divider";

import "./singleCoffeePage.css";

const SingleCoffeePage = ({ data }) => {
  const { coffeeId } = useParams();

  const { img, country, descr, price, name } = data.filter((item) => item.id == coffeeId)[0];

  // const { img, country, descr, price } = props;
  return (
    <>
      <Helmet>
        <meta name="description" content={`${name} coffee`} />
        <title>{name}</title>
      </Helmet>
      <div className="coffee__header">
        <h2 className="coffee__header-title">Our Coffee</h2>
      </div>
      <div className="single-coffee">
        <img src={img} alt="" />
        <div className="single-coffee-text">
          <h4 className="single-coffee-title">About it</h4>
          <Divider color="black" style={"margin: 0 auto"} />
          <div className="single-coffee-about">
            <p className="single-coffee-country">
              <span>Country:</span> {country}
            </p>
            <p className="single-coffee-descr">
              <span>Description:</span> {descr}
            </p>
            <p className="single-coffee-price">
              <span>Price:</span> <b>{price}$</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCoffeePage;
