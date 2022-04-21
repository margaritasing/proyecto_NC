import ReactDOM from "react-dom";

import Container from "@mui/material/Container";

import { Typography } from "@mui/material";

import AddOrderCompleted from "../components/orderCompleted";
import AddWhereIAm from "../components/whereIAm";

function PageOrderCompleted() {
  return (
    <>
      <div id="app"></div>
      <AddWhereIAm whereIAm="Order Completed" />
      <Container maxWidth="lg">
        <AddOrderCompleted />
      </Container>
    </>
  );
}

export default PageOrderCompleted;
