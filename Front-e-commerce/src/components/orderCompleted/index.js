import "./index.css";
import Container from "@mui/material/Container";
const relojImg = require("../../imgs/orderCompleted/reloj.png");
const libretaImg = require("../../imgs/orderCompleted/libreta.png");
const confirmadoImg = require("../../imgs/orderCompleted/confirmado.png");
function AddOrderCompleted() {
  return (
    <div>
      <Container maxWidth="lg">
        <div className="OC-all-content-container">
          <div>
            <img className="OC-img-reloj" src={relojImg} />
          </div>
          <div className="OC-center-column">
            <div className="OC-text-and-img-container">
              <img className="OC-img-confirmado" src={confirmadoImg} />
              <h2 className="OC-subtitle">Your Order Is Completed! </h2>
            </div>
            <div>
              <p className="OC-body">
                Thank you for your order! Your order is being processed and will
                be completed within 3-6 hours. You will receive an email
                confirmation when your order is completed.
              </p>
            </div>
            <div className="OC-button-container">
              <button className="OC-button">Continue Shopping</button>
            </div>
          </div>
          <div className="OC-img-libreta-container">
            <img src={libretaImg} className="OC-img-libreta" />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default AddOrderCompleted;
//Esto es de la page order completed
