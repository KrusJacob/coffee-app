import { useNavigate } from "react-router-dom";
import "./coffee-item.css";

const CoffeeItem = (props) => {
  const { name, price, img, country, id } = props;

  const navigate = useNavigate();

  console.log(img);

  const onClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div onClick={() => onClick(id)} className="coffee-item">
      <div className="coffee-img">
        <img src={img} alt="PrestoCoffe" />
      </div>
      <p className="descr">{name}</p>
      <p className="country">{country}</p>
      <p className="price">{price + "$"}</p>
    </div>
  );
};

export default CoffeeItem;
