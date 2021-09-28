import * as React from "react";
import { Link } from "react-router-dom";

function ItemCount({ count, btnSubs, btnAdd, comprar }) {

  return (
    <div className="container item-count">
      <div className="row mb-3">
        <h2>Item Counter</h2>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center">
          <a onClick={() => btnSubs()} className="btn btn-warning btn-count"><i className="fas fa-minus"></i></a>
        </div>
        <div className="col d-flex align-items-center">
          <p className="count"><b>{count}</b></p>
        </div>
        <div className="col d-flex align-items-center">
          <a onClick={() => btnAdd()} className="btn btn-warning btn-count"><i className="fas fa-plus"></i></a>
        </div>
      </div>
    <Link to={`/cart`}>
    <button className="btn btn-succes" type="button" onClick={() => comprar()}>¡Comprar ahora!</button>
    </Link>
    </div>
  );
}
export default ItemCount;
