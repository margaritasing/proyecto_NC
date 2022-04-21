import "./footer.css";
import Container from "@mui/material/Container";

const facebookLogo = require("../../imgs/social-media-icons/facebook.png");
const instagramLogo = require("../../imgs/social-media-icons/instagram.png");
const twitterLogo = require("../../imgs/social-media-icons/twitter.png");
function Footer() {
  return (
    <div className="footer-background-full-width">
      <Container>
        <div className="footer-all-content-container">
          <div className="footer-column">
            <h2 className="footer-title">Account</h2>
            <ul className="footer-unlistened">
              <li className="footer-lista">
                <a className="footer-lista__a" href="/my%20account">
                  My Account
                </a>
              </li>
              <li className="footer-lista">
                <a className="footer-lista__a" href="/log%20in">
                  Log in
                </a>
              </li>
              <li className="footer-lista">
                <a className="footer-lista__a" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Pages</h2>
            <ul className="footer-unlistened">
              <li className="footer-lista">
                <a className="footer-lista__a" href="/">
                  Homepage
                </a>
              </li>
              <li className="footer-lista">
                <a className="footer-lista__a" href="/tienda">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title footer-title-social-media">
              Social Medias
            </h2>
            <ul className="footer-social-media-icons">
              <img
                className="social-media-icon"
                src={facebookLogo}
                alt="Facebook logo"
              />
              <img
                className="social-media-icon"
                src={instagramLogo}
                alt="Facebook logo"
              />
              <img
                className="social-media-icon"
                src={twitterLogo}
                alt="Facebook logo"
              />
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
