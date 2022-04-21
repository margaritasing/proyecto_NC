import sillon from "../../imgs/sillon.png";

function TrendingProduct() {
  //   const supportServices = contenidoSupport();
  return (
    <div key="sillon-zone" className="lista-producto-all">
      <div>
        <div className="contenedor-imagenes-sofa">
          <img className="contenedor-imagenes-sofa__sofa" src={sillon} />
        </div>
      </div>
      <div className="zona-listas-y-botones">
        <div className="lista">
          <h2 className="lista-titulo">
            Unique Features Of leatest & Trending Products
          </h2>
        </div>

        <div className="contenedor-de-listas">
          <div className="lista">
            <li className="lista-texto">
              <span>
                All frames constructed with hardwood solids and laminates
              </span>
            </li>
          </div>

          <div className="lista">
            <li className="lista-texto">
              <span>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </span>
            </li>
          </div>

          <div className="lista">
            <li className="lista-texto">
              <span>Arms, backs and seats are structurally reinforced</span>
            </li>
          </div>
        </div>
        <div className="lista-descripcion-carrito">
          <div>
            <button className="lista-boton-agregar-al-carrito">
              Add To Cart
            </button>
          </div>
          <div className="lista-contenedor-texto-agregar-al-carrito">
            <h5>B&B Italian Sofa</h5>
            <h5 className="lista-contenedor-texto-precio">$32</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrendingProduct;
