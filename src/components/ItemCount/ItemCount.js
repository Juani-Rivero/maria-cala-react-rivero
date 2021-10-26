import * as React from "react";


function ItemCount({ count, btnSubs, btnAdd, comprar }) {

  return (
    <div className="container item-count text-center">
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

      <button className="btn btn-comprar" type="button" onClick={() => comprar()}>¡Comprar ahora!</button>

    </div>
  );
}
export default ItemCount;
