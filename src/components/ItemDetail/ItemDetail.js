import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";



const ItemDetail = ({ id, title, description, image, price }) => {

  const { addItem } = useCart();
  const [count, setCount] = React.useState(0);

  const btnAdd = () => {
    setCount((count) => count + 1);

  };
  const btnSubs = () => {
    setCount((count) => count - 1);
  };

  const addToCart = () => {
    const dataToSend = {
      id: id,
      title: title,
      description: description,
      qty: count,
      price: price,
      img: image
    }

    addItem(dataToSend);
  };


  return (
    <div className="card" style={{ width: "18rem", height: "75vh" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div style={{ position: "absolute", bottom: -180 }}>
          <ItemCount count={count}
            btnSubs={btnSubs}
            btnAdd={btnAdd}
            comprar={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
