import './ProductCard.css';
const message="Hola desde aquiii";
const ProductCard = ({ product }) => {
    return (
      
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={product.imagen} className="card-img-top" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">Bs. {product.price}</p>
      </div>
    </div>
  );
  
  
};
export default ProductCard;