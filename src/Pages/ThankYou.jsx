import * as React from "react";
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <div className="container gracias-p">
            <div className="jumbotron text-center">
                <h1 className="display-3">Recibimos su pedido correctamente!</h1>
                <p className="lead">Muchas gracias por elergirnos! Que disfrutes tus productos!</p>
                <hr />
                <Link to={`/`}>
                    <button className="btn btn-lg btn-block btn-success text-uppercase" role="button">Volver al inicio</button>
                </Link>
            </div>
        </div>
    );
};
export default ThankYou;
