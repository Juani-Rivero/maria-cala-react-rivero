import * as React from "react";
import { getFirestore } from "../firebase/";
import ItemDetail from "../components/ItemDetail/ItemDetail";



const Hogar = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const db = getFirestore();
        const productCollection = db.collection("products");

        productCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    console.log("No hay productos")
                } else {
                    setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                }
            })
            .catch(() => { });
    }, []);


    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {loading && <p>Cargando...</p>}
                    {error && (
                        <p>
                            Ha habido un error: {error.status} {error.statusText}
                        </p>
                    )}

                    {data?.map((item) => {
                        if (item.categoryId == 5) {
                            return (
                                <div className="col-lg-4 p-4">
                                    <ItemDetail
                                        id={item.id}
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        price={item.price}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Hogar;
