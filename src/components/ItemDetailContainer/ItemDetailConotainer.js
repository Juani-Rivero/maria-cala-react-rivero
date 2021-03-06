import * as React from "react";
import { getFirestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {

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
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {loading && <p>Cargando...</p>}
        {error && (
          <p>
            Ha habido un error: {error.status} {error.statusText}
          </p>
        )}

        {data?.map((item) => {
          return (
            <div className="row itemDetailcontainer">
              <div className="col-lg-4">
                <ItemDetail
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemDetailContainer;
