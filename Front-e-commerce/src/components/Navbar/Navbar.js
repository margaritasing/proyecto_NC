import "./index.css";
import styled from "styled-components";
import Container from "@mui/material/Container";
function Navbar() {
  return (
    <Container className="navBar-all-content-container">
      <NavContainer>
        <h2>LOGO</h2>
        <div>
          <a href="/">Home</a>
          <a href="#">Pages</a>
          <a href="/tienda">Tienda</a>
          <a href="/my%20account">Mi cuenta</a>
        </div>
        <div>
          <input type="text" placeholder="terminar diseño" />
        </div>
        <div className="burguer"></div>
      </NavContainer>
    </Container>
  );
}

const NavContainer = styled.nav`
  h2 {
    color: black;
    font-weight: 100;
    font-family: "Josefin Sans";
    font-size: 35px;
  }
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: black;
    font-family: "Lato";
    text-decoration: none;
    margin-right: 1rem;
    font-size: 16px;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: black;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  margin-right:0px;
  Height: 15px;
  border:solid;
  border-color:  #E7E6EF;
  }
`;

export default Navbar;
