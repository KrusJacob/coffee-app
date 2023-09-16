import "./our-best.css";

import CoffeeItem from "../coffee-item/coffee-item";

const OurBest = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemsProps } = item;

    return <CoffeeItem key={id} id={id} {...itemsProps}></CoffeeItem>;
  });

  return (
    <div className="our-best">
      <h3>Our best</h3>
      <div className="catalog-best">{elements}</div>
    </div>
  );
};

export default OurBest;
