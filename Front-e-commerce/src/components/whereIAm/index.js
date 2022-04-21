import "./index.css";
import Container from "@mui/material/Container";
const AddWhereIAm = (props) => {
  return (
    <div className="AWIA-all-content-container">
      <Container maxWidth="lg">
        <div className="AWIA-all-content">
          <div>
            <span className="AWIA-title">{props.whereIAm}</span>
          </div>
          <div>
            <a className="AWIA-text" href="/">
              Home
            </a>
            <a className="AWIA-text">. Pages</a>
            <span className="AWIA-text AWIA-text-pink">. {props.whereIAm}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AddWhereIAm;
