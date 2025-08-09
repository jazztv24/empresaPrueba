import './ProductCardBusqueda.css';
const message="Hola desde aquiii";
const ProductCardBusqueda = ({ product }) => {
    return (
      
    <div className="carda" >
      <img src={product.imagen} className="card-img-top1" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">Bs. {product.price}</p>
      </div>
    </div>
  );
  
  
};
export default ProductCardBusqueda;