import React, { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="container item-count">
      <div className="row mb-3">
        <h2>Item Counter</h2>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center">
          <a onClick={() => setCount(count - 1)} className="btn btn-warning btn-count"><i className="fas fa-minus"></i></a>
        </div>
        <div className="col d-flex align-items-center">
          <p className="count"><b>{count}</b></p>
        </div>
        <div className="col d-flex align-items-center">
          <a onClick={() => setCount(count + 1)} className="btn btn-warning btn-count"><i className="fas fa-plus"></i></a>
        </div>
      </div>
    </div>
  );
}
export default ItemCount;
