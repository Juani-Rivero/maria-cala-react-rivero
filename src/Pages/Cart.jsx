import * as React from "react";
import { useCart } from "../context/CartContext";


const Cart = () => {
  const { cart } = useCart();
  const { removeItem } = useCart();
  const {clear} = useCart();
  console.log(cart)
  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Producto</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col" className="text-center" >Cantidad</th>
                    <th scope="col" className="text-right">Precio</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody id="resumenCarrito">

                  {cart?.map((item) => {
                    return (
                        <tr>
                          <td><img src={item.img} style={{ height: 150, width: 150, }} /> </td>
                          <td>${item.title}</td>
                          <td>En stock</td>
                          <td className="text-right"><span name="price">{item.qty}</span></td>
                          <td className="text-right"> $<span name="price">{item.price}</span></td>
                          <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() =>{removeItem(item.id)}} ><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                    )
                  })}

                  <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sub-Total</td>
                    <td className="text-right" id="subTotal"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Envío</td>
                    <td className="text-right" id="shipping"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td ><strong>Total</strong></td>
                    <td className="text-right" id="total" ></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={()=>{clear()}}>Vaciar carrito</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <a className="btn btn-block btn-secondary" href="index.html">Continuar Comprando</a>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <a href="#">Finalizar Compra</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default Cart;
