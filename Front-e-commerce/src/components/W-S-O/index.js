import camion from "../../imgs/camion.png";
import monedaDeOro from "../../imgs/monedaDeOro.png";
import medalla from "../../imgs/medalla.png";
import telefono from "../../imgs/telefono.png";

function contenidoSupport() {
  /*Si necesitase mas supportServices solo añado 1 objeto mas a la constante a manito y se actualiza solo en el dom*/
  const supportImages = [
    { index: 0, image: camion },
    { index: 1, image: monedaDeOro },
    { index: 2, image: medalla },
    { index: 3, image: telefono },
  ];
  const resultado = supportImages.map((obj, i) => {
    return (
      <div key={i} className="wso--contenido">
        <div>
          <img src={obj.image} />
        </div>
        <div>
          <h3>24/7 Support</h3>
        </div>
        <div className="wso--contenido__parrafo">
          <p className="wso--parrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
    );
  });
  return resultado;
}
function AddWSO() {
  const supportServices = contenidoSupport();
  return (
    <div className="wso-contenedor-general">
      <div className="support--title">
        <h2>What Shopex Offer!</h2>
      </div>
      <div className="columnas">{supportServices}</div>
    </div>
  ); //Añadir un x4, del div support
}
export default AddWSO;
