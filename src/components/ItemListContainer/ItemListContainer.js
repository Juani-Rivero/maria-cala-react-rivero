import ItemDetailContainer from "../ItemDetailContainer/ItemDetailConotainer";

function ItemListContainer(props) {
    return (
        <div>
            <div className="greeting">
                <h2>Bienvenido al e-commerce {props.name} !</h2>
            </div>
            <ItemDetailContainer />
        </div>
    )
};

export default ItemListContainer;
