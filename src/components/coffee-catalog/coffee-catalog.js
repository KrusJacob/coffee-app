import { CSSTransition, TransitionGroup } from "react-transition-group";
import CoffeeItem from "../coffee-item/coffee-item";

import "./coffee-catalog.css";

const CoffeeCatalog = (props) => {
  const elements = props.data.map((item) => {
    const { id, ...itemsProps } = item;

    return (
      <CSSTransition tabIndex={0} key={id} timeout={500} classNames="coffee-catalog-item">
        <div className="coffee-catalog-item">
          <CoffeeItem id={id} {...itemsProps}></CoffeeItem>
        </div>
      </CSSTransition>
    );
  });
  return (
    <TransitionGroup exit={false} className="coffee-catalog">
      {elements}
    </TransitionGroup>
  );
};

export default CoffeeCatalog;
