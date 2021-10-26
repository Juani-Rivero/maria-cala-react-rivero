import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 my-auto">
                        <hr />
                        <p className="p-5 fs-4">
                            María Cala es un emprendimento de artículos para el hogar y textiles inspirados en la naturaleza.
                            Cada uno de los productos es realizado de manera artesanal y estamos en constante búsqueda de nuevos elementos para seguir ofreciendo objetos que den vida tu hogar.
                        </p>
                        <hr />
                    </div>
                    <div className="col-lg-9">
                        <div className="d-flex justify-content-end">
                            <img src="https://drive.google.com/uc?export=view&id=1LqBf03AAbKAsU29bhig71kVhofNKBla2" alt="Logo" style={{ height: "90vh", padding: "4rem" }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://i.ibb.co/f8VthPH/l-1626184120fd90fe048bc7c889ed6aeba730186122.jpg" alt="candles" />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <hr style={{ height: "4px" }} />
                    <h2 className="text-center mb-5" style={{ fontSize: "4em", fontWeight: 300 }}>Espacios únicos</h2>
                    <hr style={{ height: "4px" }} />
                </div>
                <div className="col-lg-4"></div>

                <div className="col-lg-4 img-unique">
                    <Link className="nav-link" to={`/textiles`}>
                        <img src="https://i.ibb.co/JqLVnnB/l-16315619176a76451e26ff30ab4f49e6c9e63c8cd7.jpg" alt="img 1" />
                    </Link>
                </div>
                <div className="col-lg-4 img-unique">
                    <Link className="nav-link" to={`/aromatizantes`}>
                        <img src="https://i.ibb.co/3mdGnDG/l-163156199370e4cd214c9b41fc1549f50c01846e6a.jpg" alt="img 2" />
                    </Link>
                </div>
                <div className="col-lg-4 img-unique">
                    <Link className="nav-link" to={`/hogar`}>
                        <img src="https://i.ibb.co/nzQtdsb/l-16315620695742fed325392597bce1cf998edc09f8.jpg" alt="img 3" />
                    </Link>
                </div>

            </div>
        </div>


    );
};
export default Home;
