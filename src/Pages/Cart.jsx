import * as React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Button, Tooltip } from "@mui/material";


const Cart = () => {
  const { cartSummary } = useCart();
  cartSummary();
  const { cart } = useCart();
  const { removeItem } = useCart();
  const { clear } = useCart();
  const { subtotal } = useCart();
  const { envio } = useCart();
  const { total } = useCart();
  const cartLenght = cart.length;
  let itemSummary = [];
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");


  cart.forEach((item) => {
    itemSummary.push({
      item: item.title,
      quantity: item.qty,
      price: item.price,
    });
  });
  const newOrder = {
    buyer: { name: name, phone: phone, email: email },
    items: itemSummary,
    total: total,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  };
  const handleCheckout = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    ordersCollection
      .add(newOrder)
      .then((docRef) => console.log(docRef))
      .catch((error) => console.log(error));
    clear();
  };
  return (
    <>
      {cartLenght === 0 && (
        <>
          <div className="container d-flex justify-content-around flex-column">
            <h2 className="mt-5 text-center">Su carrito está vacío!</h2>
            <div className="d-flex justify-content-around">
              <Link
                className="btn btn-block btn-secondary mt-5 w-25 "
                to={`/itemdetailcontainer`}>
                Agregar productos
              </Link>
            </div>
          </div>
        </>
      )}
      {cartLenght > 0 && (
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped mt-5">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Producto</th>
                      <th scope="col">Disponibilidad</th>
                      <th scope="col" className="text-center">
                        Cantidad
                      </th>
                      <th scope="col" className="text-right">
                        Precio
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody id="resumenCarrito">
                    {cart?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <img
                              src={item.img}
                              style={{ height: 150, width: 150 }}
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>En stock</td>
                          <td className="text-right">
                            <input
                              className="form-control text-center"
                              type="number"
                              value={item.qty}
                              min="0"
                              name="price"></input>
                          </td>
                          <td className="text-right">
                            {" "}
                            $<span name="price">{item.price}</span>
                          </td>
                          <td className="text-right">
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => {
                                removeItem(item.id);
                              }}>
                              <i className="fa fa-trash"></i>{" "}
                            </button>{" "}
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Sub-Total</td>
                      <td className="text-right" id="subTotal">
                        {subtotal}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Envío</td>
                      <td className="text-right" id="shipping">
                        {envio}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right" id="total">
                        {total}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            clear();
                          }}>
                          Vaciar carrito
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row mb-5">
                <form className="mt-5" style={{ border: "solid 3px black", borderRadius: "15px" }}>
                  <h1>Complete sus datos</h1>
                  <div class="mb-3">
                    <label htmlFor="name" class="form-label">
                      Nombre y Apellido
                    </label>
                    <input
                      onInput={(e) => setName(e.target.value)}
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Juan Doe"
                    />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">
                      E-mail
                    </label>
                    <input
                      onInput={(e) => setEmail(e.target.value)}
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="juan@gmail.com"
                      name="email"
                    />
                    <div id="emailHelp" class="form-text">
                      Nunca compartiremos esta información con nadie.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-check-label" htmlFor="phone">
                      Teléfono
                    </label>
                    <input
                      onInput={(e) => setPhone(e.target.value)}
                      type="tel"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="3413123456"
                    />
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to={`/`}>
                    <button className="btn btn-block btn-secondary">
                      Continuar Comprando
                    </button>
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">

                  {(name !== "" && phone !== "" && email !== "") ? (
                    <Link to={`/thank-you`}>
                      <button
                        className="btn btn-lg btn-block btn-success text-uppercase"
                        onClick={() => {
                          handleCheckout();
                        }}>
                        Finalizar Compra
                      </button>
                    </Link>
                  ) : (
                    <Tooltip title="Complete sus datos">
                      <span className="btn btn-lg btn-block btn-success text-uppercase">
                        <Button disabled>Finaliza Compra</Button>
                      </span>
                    </Tooltip>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
