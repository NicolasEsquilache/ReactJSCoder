import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartContext from "../../context/CartContext";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const { addItem } = useContext(CartContext);

    useEffect(() => {
        getProduct(id).then(response => {
            setItem(response);
        }).catch((error) => {
            setItem(null);
        })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return <ItemDetail item={item} isLoading={isLoading} addItem={addItem} />
};

export default ItemDetailContainer;