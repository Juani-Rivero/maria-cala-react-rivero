import React, { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="container item-count">
        <h2>Item Counter</h2>
        <button onClick={() => setCount(count + 1)} className="btn btn-warning btn-count">Click Aquí</button>
      <p>Hiciste click <b> {count} </b> veces</p>
    </div>
  );
}
export default ItemCount;
