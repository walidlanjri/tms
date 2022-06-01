const Products = () => {
    return ( 
        <div className="productsList">
            <h2>List des produits</h2>
            <div className="product">
                <button><i class="fa-solid fa-square-pen"></i></button>
                <p>Product Name</p>
                <button><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <button>Ajouter</button>
        </div>
     );
}
 
export default Products;