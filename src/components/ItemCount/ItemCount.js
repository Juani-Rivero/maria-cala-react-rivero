import * as React from "react";


function ItemCount({ count, btnSubs, btnAdd, comprar }) {

  return (
    <div className="container item-count text-center">
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center">
          <a onClick={() => btnSubs()} className="btn btn-warning" ><i className="fas fa-minus" ></i></a>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <p className="count"><b>{count}</b></p>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <a onClick={() => btnAdd()} className="btn btn-warning "><i className="fas fa-plus"></i></a>
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <button className="btn btn-comprar" type="button" onClick={() => comprar()}>Agregar</button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
export default ItemCount;
