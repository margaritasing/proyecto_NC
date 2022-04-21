import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import AddWhereIAm from "../components/whereIAm/index.js";
import Navbar from "../components/Navbar/Navbar.js";
import AddFormRegister from "../components/form-register/AddFormRegister.jsx";

function PageRegister() {
  return (
    <>
      <div id="app"></div>
      <AddWhereIAm whereIAm="Register" />
      <Container maxWidth="lg">
        <AddFormRegister />
      </Container>
    </>
  );
}

export default PageRegister;
